import { SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

type Input = {
    name: string;
    social: {
        twitter: string,
        fb: string,
    },
    phoneNumbers: string[];
}

const Array_Field = () => {

    const { register, control, handleSubmit, formState } = useForm<Input>();
    const { errors } = formState;

    const onSubmit: SubmitHandler<Input> = (data: Input) => {
        console.log("Form values", data);
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
                <input type="text" {...register("name")} style={{ paddingLeft: "5px" }} />
                <p style={{ alignSelf: "start", justifySelf: "start", gridColumnStart: "2", gridColumnEnd: "-1", color: "red" }}>{errors?.name?.message}</p>

                <label
                    htmlFor="twitter"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    Twitter
                </label>
                <input type="text" id="twitter" {...register("social.twitter", {
                    required: {
                        value: true,
                        message: "Twitter field is required",
                    }
                })} />
                <p style={{ alignSelf: "start", justifySelf: "start", gridColumnStart: "2", gridColumnEnd: "-1", color: "red" }}>{errors?.social?.twitter?.message}</p>

                {/* Facebook */}
                <label
                    htmlFor="fb"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    Facebook
                </label>
                <input type="text" id="fb" {...register("social.fb", {
                    required: {
                        value: true,
                        message: "Facebook field is required",
                    }
                })} />
                <p style={{ alignSelf: "start", justifySelf: "start", gridColumnStart: "2", gridColumnEnd: "-1", color: "red" }}>{errors?.social?.fb?.message}</p>

                {/* Phone Numbers */}
                <label
                    htmlFor="primary-phone"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    Primary Phone Number
                </label>
                <input type="text" id="primary-phone" {...register("phoneNumbers.0", {
                    required: {
                        value: true,
                        message: "Primary Phone Number field is required",
                    }
                })} />

                <p style={{ alignSelf: "start", justifySelf: "start", gridColumnStart: "2", gridColumnEnd: "-1", color: "red" }}>{errors?.phoneNumbers?.[0]?.message}</p>

                {/* Phone Numbers */}

                <label
                    htmlFor="primary-phone"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    Secondary Phone Numbers
                </label>
                {/* //! Should Not user phoneNumbers[1], ([]) notation. Always use phoneNumbers.1 (.) notation - Form Hooks Dont allow it,to maintain consistency */}

                <input type="text" id="primary-phone" {...register("phoneNumbers.1", {
                    required: {
                        value: true,
                        message: "Secondary Phone Number field is required",
                    }
                })} />
                <p style={{ alignSelf: "start", justifySelf: "start", gridColumnStart: "2", gridColumnEnd: "-1", color: "red" }}>{errors?.phoneNumbers?.[1]?.message}</p>

                <button
                    type="submit"
                    style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}
                >Submit</button>
            </form>

            <DevTool control={control} />
        </>
    );
};


export default Array_Field