import { useState, useEffect } from 'react'
import Popup from 'reactjs-popup';
import ProjectNavBar from '../../projectsnavbar'

const Other = () => {
    const [projectData, setProjectData] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/projects/game/get`) 
            .then((res) => res.json())  // Parse the response as JSON
            .then((data) => {
                setProjectData(data.reverse());  // Store the data in state
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div id="content">
            <ProjectNavBar/>
            <div id="projects_page">
                <h1>Other Projects</h1>
                <h3>These projects include game development and other non-software related projects.</h3>

                <div id="projects_container">
                    {
                        // Generate popup triggerrers for each of the projects from the backend
                        projectData.map((game) => (
                            <Popup
                            // The element to display the trigger with. (The summary that can be clicked)
                            trigger={<div key={game.id} id="project">
                                <div id="project_image">
                                    <img src={game.image}/>
                                </div>
                                
                                <div id="project_titles">
                                    <h2>{game.title}</h2>
                                    <h3>{game.subtitle}</h3>
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
                                        <div key={game.id} id="popup_modal">
                                            <h1>{game.title}</h1>
                                            <img src={game.image} width="40%" />
                                            <h3>{game.description}</h3>
                                            <br></br>
                                            <h3><a href={game.link}>Link to Project</a></h3>
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

export default Other