import { useEffect, useState, useRef } from 'react';

const OurProcess = () => {
    // State variables for the active process step and button states
    const [process, setProcess] = useState(0);
    const [listbtns, setListbtns] = useState([false, false, false, false, false]);

    // Reference to the SVG container
    const svgContainerRef = useRef(null);

    // Function to update the active process step
    const changeState = (index) => () => {
        setProcess(index);
    };

    // Effect to handle changes in the active process step
    useEffect(() => {
        // Update button states to reflect the active step
        let newListbtns = [false, false, false, false, false];
        newListbtns[process] = true;
        setListbtns(newListbtns);

        // Get the active step button and container width
        const activeButton = svgContainerRef.current.children[process];
        const containerWidth = svgContainerRef.current.offsetWidth;

        // Calculate the scroll offset to center the active step
        const scrollOffset = activeButton.offsetLeft - (containerWidth - activeButton.offsetWidth) / 2;

        // Scroll the SVG container to the calculated offset with smooth transition
        svgContainerRef.current.scrollTo({
            left: scrollOffset,
            behavior: 'smooth'
        });
    }, [process]);

    return (
        <div className="flex flex-col items-center "> {/* Centering the SVG container horizontally */}
            <div className="flex justify-center gap-4 btns-ourprocess no-scrollbar">
                {["Flours mixing", "Extrusion and forming", "Pre-drying", "Drying", "Cooling"].map((step, index) => (
                    <button
                        key={index}
                        className={`btn-color-main text-btn-main rounded-full w-max h-[40px] whitespace-nowrap ${listbtns[index] ? "btn-active-main" : ""}`}
                        onClick={changeState(index)}
                    >
                        {step}
                    </button>
                ))}
            </div>

            <div
                ref={svgContainerRef}
                className="flex items-end overflow-hidden no-scrollbar pt-7 mx-auto relative" // Centering the container horizontally
                style={{ maxWidth: "100%", scrollBehavior: 'smooth' }} // Added maxWidth to ensure the container doesn't overflow its parent
            >

                <img
                    src={`/assets/process/1.svg`}
                    alt="1"
                    className={`fade-opacity z-50 ${listbtns[0] ? "opacity-100" : "opacity-25"}`}
                    style={{ position: "relative" }}
                />
                <img
                    src={`/assets/process/2.svg`}
                    alt="2"
                    className={`fade-opacity ml-[-52px] ${listbtns[1] ? "opacity-100 " : "opacity-25"}`} // Adjusted padding here
                    style={{ position: "relative" }}
                />
                <img
                    src={`/assets/process/3.svg`}
                    alt="3"
                    className={`fade-opacity ${listbtns[2] ? "opacity-100" : "opacity-25"}`}
                    style={{ position: "relative" }}
                />
                <img
                    src={`/assets/process/4.svg`}
                    alt="4"
                    className={`fade-opacity z-50 ${listbtns[3] ? "opacity-100" : "opacity-25"}`}
                    style={{ position: "relative" }}
                />
                <img
                    src={`/assets/process/5.svg`}
                    alt="5"
                    className={`fade-opacity  ml-[-76px] ${listbtns[4] ? "opacity-100" : "opacity-25"}`}
                    style={{ position: "relative" }}
                />
            </div>
        </div>
    );
}

export default OurProcess;
