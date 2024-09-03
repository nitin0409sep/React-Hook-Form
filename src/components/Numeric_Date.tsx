import { SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useEffect, useState } from 'react';

type Input = {
    name: string,
    age: number,
    dob: Date,
}

let renderCount = 0;

const Numeric_Date = () => {
    const { register, control, handleSubmit } = useForm<Input>({
        defaultValues: {
            name: "",
        }
    });

    const [name, setName] = useState("");

    const onSubmit: SubmitHandler<Input> = (data: Input) => {
        console.log("Form Submitted!!! ", data);
    }

    useEffect(() => {
        console.log(name);
    }, [name])

    renderCount++;
    return (
        <>
            <h2>Dynamic Fields ({renderCount})</h2>

            <form
                style={{
                    display: "grid",
                    gridAutoRows: "auto",
                    gridTemplateColumns: "200px 1fr",
                    width: "700px",
                    border: "2px solid black",
                    columnGap: "20px",
                    rowGap: "10px",
                    padding: "20px",
                    marginTop: "20px",
                }}

                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <label
                    htmlFor="name"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    Name
                </label>
                <input type="text" id="name" {...register("name")} style={{ paddingLeft: "5px" }}
                    onChange={(e) => setName(e.target.value)} />

                <label
                    htmlFor="age"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    Age
                </label>
                {/* //? valueAsNumber - will ensures that value goes as number, not as string */}
                <input type="number" id="age" {...register("age", { valueAsNumber: true })} style={{ paddingLeft: "5px" }} />

                <label
                    htmlFor="dob"
                    style={{ alignSelf: "start", justifySelf: "start" }}
                >
                    DOB
                </label>
                {/* //? valueAsNumber - will ensures that value goes as number, not as string */}
                <input type="date" id="dob" {...register("dob", { valueAsDate: true })} style={{ paddingLeft: "5px" }} />

                <button
                    type="submit"
                    style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}
                >Submit</button>
            </form >

            <DevTool control={control} />
        </>
    );
};

export default Numeric_Date