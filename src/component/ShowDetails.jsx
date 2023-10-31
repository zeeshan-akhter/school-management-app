import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { deleteStudentData, fetchStudents } from '../features/students/studentSlice';
import { deleteteacherData, fetchTeachers } from '../features/teachers/teacherSlice';
import UpdateForm from './UpdateForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function ShowDetails() {
  const { students, status: studentStatus } = useSelector(state => state?.students)
  const { teachers, status: teacherStatus } = useSelector(state => state?.teachers)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id, type } = useParams();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const data = type === "student" ? students?.find(item => item._id === id) : teachers?.find(item => item._id === id)

  useEffect(() => {
    dispatch(fetchStudents())
    dispatch(fetchTeachers())
  }, [])
  return <div className="detailsCard">
    <h3>{data?.name} Profile</h3>
    <h4>{type?.toUpperCase()} </h4>
    {
      studentStatus === "loading" || teacherStatus === "loading" ? <div className='loader'></div> : null
    }
    {Object?.name ?
      Object.keys(data ?? {}).map(key => (key !== '_id' && key !== '__v' && <p>{key[0].toUpperCase() + key.slice(1)} :<b><i> {data[key]} </i></b> </p>))
      :
      <p>No data found for this Id</p>
    }
    <button onClick={handleOpen}>Edit Data</button>
    <button onClick={() => {
      dispatch(type === 'student' ? deleteStudentData(data?._id) : deleteteacherData(data?._id))
      navigate(-1)
    }}>Delete forever</button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="formToUpdate">
          <UpdateForm type={type} data={data} onClose={handleClose} />
        </div>
      </Box>
    </Modal>
  </div>
}