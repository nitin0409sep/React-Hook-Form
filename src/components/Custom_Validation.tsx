import { SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type Input = {
    name: string,
    email: string,
    channel: string
}

const Custom_Validation = () => {

    const { register, control, handleSubmit, formState } = useForm<Input>();
    const { errors } = formState;

    const { name, ref, onBlur, onChange } = register("name", {
        required: {
            value: true,
            message: "Name is required"
        }
    });

    const onSubmit: SubmitHandler<Input> = (data: Input) => {
        console.log("Form Submitted!!! ", data);
    }

    return (
        <>
            <h2>Form 02</h2>

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
                <input type="text" id="name" name={name} ref={ref} onChange={onChange} onBlur={onBlur} style={{ paddingLeft: "5px" }} />
                <p style={{ alignSelf: "start", justifySelf: "start", gridColumnStart: "2", gridColumnEnd: "-1", color: "red" }}>{errors?.name?.message}</p>

                <label
                    htmlFor="email"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    Email
                </label>


                {/* //? Custom Validation //? */}
                <input type="text" id="email" {...register("email", {
                    required: {
                        value: true,
                        message: "Email is required",
                    },
                    pattern: {
                        value: /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                        message: 'Invalid Email Format'
                    },

                    // Custom Validator
                    validate: (fieldValue) => {
                        return fieldValue !== "admin@gmail.com" || "Enter a different email address" // Custom Message is after ||
                    }

                })} style={{ paddingLeft: "5px" }} />
                <p style={{ alignSelf: "start", justifySelf: "start", gridColumnStart: "2", gridColumnEnd: "-1", color: "red" }}>{errors?.email?.message}</p>

                <label
                    htmlFor="channel"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    Channel
                </label>
                <input type="text" id="channel" {...register("channel", {
                    required: {
                        value: true,
                        message: "Channel is requried"
                    },

                    //? Custom Validation
                    validate: {
                        notAdminChannel: (fieldValue) => {
                            return fieldValue !== "Admin Channel" || "Write other channel name is already, occupied."
                        },
                        notEndsWithChannel: (fieldValue) => {
                            return fieldValue.endsWith("Channel") || "Should end up with name as Channel";
                        }
                    }

                })} style={{ paddingLeft: "5px" }} />
                <p style={{ alignSelf: "start", justifySelf: "start", gridColumnStart: "2", gridColumnEnd: "-1", color: "red" }}>{errors?.channel?.message}</p>

                <button
                    type="submit"
                    style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}
                >Submit</button>
            </form>

            <DevTool control={control} />
        </>
    );
};

export default Custom_Validation