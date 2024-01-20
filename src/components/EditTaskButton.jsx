import { useState, useEffect } from "react";
import NewTask from "./NewTask";

const EditTaskButton = ({ taskId }) => {
    const [showEditModal, setShowEditModal] = useState(false);

    const openEditModal = () => {
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            const editModalContent = document.getElementById("editModalContent");

            if (editModalContent && !editModalContent.contains(e.target)) {
                closeEditModal();
            }
        };

        if (showEditModal) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showEditModal]);


    return (
        <>
            <button onClick={openEditModal} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                Edit
            </button>
            {showEditModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                    <div id="editModalContent">
                        <NewTask closeModal={closeEditModal} editMode taskToEdit={{ id: taskId }} />
                    </div>
                </div>
            )}
        </>
    );
};

export default EditTaskButton;
