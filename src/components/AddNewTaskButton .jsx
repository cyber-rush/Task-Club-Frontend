import { useState, useEffect } from "react";
import NewTask from "./NewTask";

const AddNewTaskButton = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            const modalContent = document.getElementById("modalContent");

            if (modalContent && !modalContent.contains(e.target)) {
                closeModal();
            }
        };

        if (showModal) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showModal]);

    return (
        <div>
            <button onClick={openModal} className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Add New Task
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                    <div id="modalContent">
                        <NewTask closeModal={closeModal} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddNewTaskButton;
