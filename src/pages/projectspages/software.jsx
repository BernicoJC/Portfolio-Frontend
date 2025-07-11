import { useState, useEffect } from 'react'
import Popup from 'reactjs-popup';
import ProjectNavBar from '../../projectsnavbar'

const Software = () => {
    const [projectData, setProjectData] = useState([])

    // Fetching the data from backend
    useEffect(() => {
        // Use the fetch to fetch the data from proxy+"/portfolio"
        // And then it processes the data (gets response from fetch, turn it to json)
        fetch(`${import.meta.env.VITE_API_URL}/projects/software/get`)
            .then((res) => res.json())  // res.json produces data, which then we use to populate our state
            .then((data) => {
                setProjectData(data.reverse());  // Store the data in state
            })
            .catch((error) => console.error("Error fetching data:", error));
        }, []);

    return (
        <div id="content">
            <ProjectNavBar/>
            <div id="projects_page">
                <h1>Software Engineering Projects</h1>
                <h3>These projects include college programming assignments and personal projects that involve software / website development. For more, please visit <a href="https://github.com/BernicoJC?tab=repositories">my Github</a>!</h3>
                
                <div id="projects_container">
                    {
                        // Generate popup triggerrers for each of the projects from the backend
                        projectData.map((software) => (     
                            // The element to display the trigger with. (The summary that can be clicked)                       
                            <Popup
                            trigger={<div key={software.id} id="project">
                                <div id="project_image">
                                    <img src={software.image} />
                                </div>
                                
                                <div id="project_titles">
                                    <h2>{software.title}</h2>
                                    <h3>{software.subtitle}</h3>
                                </div>
                            </div>
                            }
                            overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }} 
                            modal
                            nested
                            >
                                {
                                    // Close function provided by the library.
                                    close => (
                                        // The popup
                                        <div key={software.id} id="popup_modal">
                                            <h1>{software.title}</h1>
                                            <img src={software.image} width="40%" />
                                            <h3>{software.description}</h3>
                                            <br></br>
                                            <h3>{software.background}</h3>
                                            <br></br>
                                            <h3><a href={software.link}>Link to Project</a></h3>
                                            <br></br>

                                            {/* Run the close function */}
                                            <button onClick={() => close()}>Close</button>
                                        </div>
                                    )
                                }
                            </Popup>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Software