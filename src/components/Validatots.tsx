import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
    name: string,
    email: string,
    age: number,
}

const Validatots = () => {
    const {register, handleSubmit, formState:{errors, touchedFields} } = useForm<Inputs>()
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{display: "grid",gridAutoRows: "auto", gridTemplateColumns:"50px 1fr", width:"300px", border:"2px solid black", columnGap:"20px", rowGap:"10px", padding:"20px", marginTop:"20px"}} >
        
        <label htmlFor="Name" style={{alignSelf: "start", justifySelf:"start"}}>Name</label>
        <input type="text" {...register("name", {required:true, minLength:2 , maxLength:3})} />
        { errors.name && <span style={{alignSelf: "start", justifySelf:"start", gridColumnStart: "2", gridColumnEnd:"-1", color: "red"}}>This field is {errors.name?.type}</span>} 

        <label htmlFor="Email" style={{alignSelf: "start", justifySelf:"start"}}>Email</label>
        <input type="text" {...register("email", {required:true, minLength:3 , maxLength:6})} />
        { errors.email && <span style={{alignSelf: "start", justifySelf:"start", gridColumnStart: "2", gridColumnEnd:"-1", color: "red"}}>This field is {errors.email?.type}</span>} 
        
        
        <label htmlFor="Age" style={{alignSelf: "start", justifySelf:"start"}}>Age</label>
        <input type="text" {...register("age", {required:true, minLength:2 , maxLength:6})} />
        { errors.age && <span style={{alignSelf: "start", justifySelf:"start", gridColumnStart: "2", gridColumnEnd:"-1", color: "red"}}>This field is {errors.age?.type}</span>} 
        
        <input type="submit" style={{gridColumnStart: "1", gridColumnEnd:"-1"}} /> 
    </form>

  )
}

export default Validatots