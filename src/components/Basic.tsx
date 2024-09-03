import {useForm , SubmitHandler} from 'react-hook-form';
type Inputs = {
  name: string,
  email:string,
}

const Basic = () => {
  
  const {
    register,
    handleSubmit,
    watch,
    formState:{errors},
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  };
  
  console.log(watch("name"))
  return (
      <>
    <h2>
      Basic Component 
      </h2>
          
        <form onSubmit={handleSubmit(onSubmit)} style={{display: "grid",gridAutoRows: "auto", gridTemplateColumns:"50px 1fr", width:"300px", border:"2px solid black", columnGap:"20px", rowGap:"10px", padding:"20px", marginTop:"20px"}} >
        <label htmlFor="Name" style={{alignSelf: "start", justifySelf:"start"}}>Name</label>
        <input type="text" {...register("name", {required: true})} />
        { errors.name && <span style={{alignSelf: "start", justifySelf:"start", gridColumnStart: "2", gridColumnEnd:"-1", color: "red" }}>This field is required</span>} 
        
        <label htmlFor="Email" style={{alignSelf: "start", justifySelf:"start"}}>Email</label>
        <input type="text" {...register("email", { required:true })} />
        { errors.email && <span style={{alignSelf: "start", justifySelf:"start", gridColumnStart: "2", gridColumnEnd:"-1", color: "red"}}>This field is required</span>} 
        
        <input type="submit" style={{gridColumnStart: "1", gridColumnEnd:"-1"}} /> 
    </form>

           </>



  )
}

export default Basic