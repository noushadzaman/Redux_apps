import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { changeJob, createJob, removeEditItem } from "../features/jobs/jobsSlice";

const Form = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { editing } = useSelector(state => state.jobs);
    const [isEditing, setIsEditing] = useState(params?.id ? true : false);
    const [job, setJob] = useState({
        title: editing.title || "",
        type: editing.type || "",
        salary: editing.salary || "",
        deadline: editing.deadline || "",
        id: editing.id || crypto.randomUUID()
    });

    const handleChange = (e) => {
        e.preventDefault();
        setJob({
            ...job,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            dispatch(changeJob({ id: job.id, data: job }));
            navigate('/')
        }
        else {
            dispatch(createJob(job));
        }
    };

    return (
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
            <div className="lg:pl-[14rem] mt-[5.8125rem]">
                <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                    {
                        isEditing ?
                            <h1 className="mb-10 text-center lws-section-title">Edit Job</h1> :
                            <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>
                    }
                    <div className="max-w-3xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="fieldContainer">
                                <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                                <select
                                    defaultValue={editing.title}
                                    onChange={(e) => handleChange(e)}
                                    id="lws-JobTitle" name="title" required>
                                    <option value="" hidden selected>Select Job</option>
                                    <option>Software Engineer</option>
                                    <option>Software Developer</option>
                                    <option>Full Stack Developer</option>
                                    <option>MERN Stack Developer</option>
                                    <option>DevOps Engineer</option>
                                    <option>QA Engineer</option>
                                    <option>Product Manager</option>
                                    <option>Social Media Manager</option>
                                    <option>Senior Executive</option>
                                    <option>Junior Executive</option>
                                    <option>Android App Developer</option>
                                    <option>IOS App Developer</option>
                                    <option>Frontend Developer</option>
                                    <option>Frontend Engineer</option>
                                </select>
                            </div>

                            <div className="fieldContainer">
                                <label htmlFor="lws-JobType">Job Type</label>
                                <select
                                    defaultValue={editing.type}
                                    onChange={(e) => handleChange(e)}
                                    id="lws-JobType" name="type" required>
                                    <option value="" hidden selected>Select Job Type</option>
                                    <option>Full Time</option>
                                    <option>Internship</option>
                                    <option>Remote</option>
                                </select>
                            </div>

                            <div className="fieldContainer">
                                <label htmlFor="lws-JobSalary">Salary</label>
                                <div className="flex border rounded-md shadow-sm border-slate-600">
                                    <span className="input-tag">BDT</span>
                                    <input
                                        defaultValue={editing.salary}
                                        onChange={(e) => handleChange(e)}
                                        type="number" name="salary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                                        placeholder="20,00,000" />
                                </div>
                            </div>

                            <div className="fieldContainer">
                                <label htmlFor="lws-JobDeadline">Deadline</label>
                                <input
                                    defaultValue={editing.deadline}
                                    onChange={(e) => handleChange(e)}
                                    type="date" name="deadline" id="lws-JobDeadline" required />
                            </div>

                            <div className="text-right">
                                {
                                    isEditing ?
                                        <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                                            Edit
                                        </button> :
                                        <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                                            Submit
                                        </button>
                                }
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Form