import {SubmitHandler, useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

type Input = {
  name: string, 
  email:string, 
  channel:string
}

const Form_01 = () => {
  
  const {register, control, handleSubmit, formState} = useForm<Input>();
  const {errors} = formState;

  const {name, ref, onBlur, onChange} = register("name", {required: {
    value:true,
    message: "Name is required"
  }});

  const onSubmit:SubmitHandler<Input> = (data:Input) =>{
    console.log("Form Submitted!!! ", data);
  }

  return (
    <>
      <h2>Form 01</h2> 

      <form
        style={{
          display: "grid",
          gridAutoRows: "auto",
          gridTemplateColumns: "50px 1fr",
          width: "300px",
          border: "2px solid black",
          columnGap: "20px",
          rowGap: "10px",
          padding: "20px",
          marginTop: "20px",
        }}

        onSubmit={handleSubmit(onSubmit)}
        noValidate //! Prveent broweser validation, allowing react hook validation
      >
        <label
          htmlFor="name"
          style={{ alignSelf: "start", justifySelf: "start" }}
        >
          Name
        </label>
        <input type="text" id="name" name={name} ref={ref} onChange={onChange} onBlur={onBlur}  style={{paddingLeft:"5px"}} />
        <p style={{alignSelf: "start", justifySelf:"start", gridColumnStart: "2", gridColumnEnd:"-1", color: "red" }}>{errors?.name?.message}</p>

        <label
          htmlFor="email"
          style={{ alignSelf: "start", justifySelf: "start" }}
          >
          Email
        </label>
        <input type="text" id="email" {...register("email", {required:true, 
          pattern:{
            value: /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
            message: 'Invalid Email Format'
          }})} style={{paddingLeft:"5px"}} />
        <p style={{alignSelf: "start", justifySelf:"start", gridColumnStart: "2", gridColumnEnd:"-1", color: "red" }}>{errors?.email?.message}</p>
       
        <label
          htmlFor="channel"
          style={{ alignSelf: "start", justifySelf: "start" }}
        >
          Channel
        </label>
        <input type="text" id="channel" {...register("channel", {required: {
          value:true,
          message: "Channel is requried"
          }
        })} style={{paddingLeft:"5px"}} />
        <p style={{alignSelf: "start", justifySelf:"start", gridColumnStart: "2", gridColumnEnd:"-1", color: "red" }}>{errors?.channel?.message}</p>

        <button
          type="submit"
          style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}
        >Submit</button>
      </form>

      <DevTool control={control}/>
    </>
  );
};

export default Form_01;
