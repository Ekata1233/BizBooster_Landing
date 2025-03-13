import React, { useEffect } from 'react'
import Hero from "../../assets/description.png";
import '../ModuleDescriptions/ModuleDescription.css'
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../../assets/onboarding_icon.png'
import image2 from '../../assets/onboarding_icon.png'
import image3 from '../../assets/onboarding_icon.png'
const categories = [
    { id: 1, title: "Category 1", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", image: image1 },
    { id: 2, title: "Category 2", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", image: image1 },
    { id: 3, title: "Category 3", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", image: image1 },
    { id: 4, title: "Category 4", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", image: image1 },
    { id: 5, title: "Category 5", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", image: image1 },
    { id: 6, title: "Category 6", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.", image: image1 },
];
function ModuleSecriptions() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        });
      }, []);
    return (
        <div>
            <div className="position-relative">
                <img
                    src={Hero}
                    className="w-100"
                    alt="Hero"
                    style={{ height: "400px" }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
                    <p className="text-white fw-bold text-end w-75">We streamline processes, drive growth, enhance branding, ensure legal compliance, provide home and IT solutions, foster education, offer financial planning, and support franchise expansion.</p>
                </div>
            </div>

            <div className="desc-container">

                <div className="desc-background"></div>

                <div className='bg-white py-5'>
                    <Container>
                        <div>
                            <h1 className='fw-bold blue'>What is Onboarding</h1>
                            <p className='text-secondary text py-3'>Onboarding is a structured process designed to help new employees, clients, or users integrate smoothly into an organization, service, or system. For employees, it involves introducing them to the company’s culture, policies, and expectations while providing necessary training, resources, and support to help them understand their roles and responsibilities. This process helps build confidence, fosters engagement, and ensures they are well-equipped to contribute effectively.

                                For clients or users, onboarding involves guiding them through the initial stages of using a product or service, ensuring they understand its features, benefits, and how to maximize its value. Effective onboarding enhances user satisfaction, builds trust, and encourages long-term engagement by minimizing confusion and addressing potential challenges early in the journey.</p>
                        </div>

                    </Container>
                </div>

                <div className="desc-overlay ">
                    <div className=''>
                        <h1 className='text-white fw-bold text-center py-lg-5  double-underline'>
                            Type Of Category
                        </h1>
                        <div>


                            <Container>
                                <Row>
                                    {categories.map((category) => (
                                        <Col key={category.id} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='category-overlay  my-4'>
                                            <div className='border border-1 px-4 rounded rounded-4 category-card'>
                                                <div className="d-flex justify-content-center align-items-center py-3">
                                                    <img src={category.image} className='img-fluid' alt={category.title} />
                                                </div>
                                                <h3 className='text-center fw-bold'>{category.title}</h3>
                                                <p className='text p'>{category.description}</p>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                            <div className='full-width-bg  mt-5 py-5' style={{backgroundColor:"rgb(255, 255, 255)"}}>
                                <Container className='py-5'>
                                <h1 className='blue fw-bold text-start mb-5 double-underline'>
                                    Industry Growth
                                </h1>
                                <p className='text-secondary text'>
                                The onboarding industry has experienced significant growth in recent years as organizations recognize the critical role it plays in employee retention, user engagement, and customer satisfaction. Effective onboarding accelerates integration, reduces turnover, and enhances productivity by equipping new employees and clients with the necessary tools and knowledge. As industries evolve and competition intensifies, companies are investing in advanced onboarding solutions that utilize technology, personalized experiences, and continuous support. This proactive approach not only improves initial experiences but also fosters long-term loyalty and business success.
                                </p>
                                </Container>
                            </div>
                            <div className='full-width-bg py-5' style={{backgroundColor:"rgba(0, 81, 157, 0.62)"}}>
                                <Container className='py-5'>
                                <h1 className='text-white fw-bold text-end mb-5 double-underline'>
                                Opportunities in the Onboarding Industry
                                </h1>      
                                <p className='text-white text'>
                                The onboarding industry has experienced significant growth in recent years as organizations recognize the critical role it plays in employee retention, user engagement, and customer satisfaction. Effective onboarding accelerates integration, reduces turnover, and enhances productivity by equipping new employees and clients with the necessary tools and knowledge. As industries evolve and competition intensifies, companies are investing in advanced onboarding solutions that utilize technology, personalized experiences, and continuous support. This proactive approach not only improves initial experiences but also fosters long-term loyalty and business success.
                                </p>
                                </Container>
                            </div>
                            <div className='full-width-bg py-5' style={{backgroundColor:"rgb(255, 255, 255)"}}>
                                <Container className='py-5'>
                                <h1 className='text-dark fw-bold text-center mb-5 double-underline'>
                                Why to Choose BizBooster ?
                                </h1>      
                                <p className='text-secondary text'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corporis eaque aut commodi aliquam alias repellat quod ex eum nobis nisi delectus, hic nulla veritatis at possimus recusandae id quasi, distinctio dolorum. Nemo, quos. Cum dolorum eum architecto quas deleniti nesciunt, fuga eveniet ad a enim ab maxime obcaecati porro quaerat vel unde similique. Incidunt modi similique rerum ab voluptas cumque saepe laudantium nulla quasi, molestiae aperiam. Dolor, esse incidunt eum quo illum soluta cupiditate repellendus mollitia? Ex ab necessitatibus, alias hic impedit cupiditate eum molestiae magni tempora perspiciatis iusto eveniet explicabo delectus voluptates quam. Quam blanditiis itaque repellendus natus cupiditate dolorem neque minima officia modi quasi est quae repellat ipsa quidem tempore rerum dolor, facere, reprehenderit, voluptas porro adipisci sapiente. Repudiandae impedit, quam alias expedita maiores voluptas ad? Autem amet quidem dolorum repellendus fugiat libero dolore. Praesentium recusandae in nam veritatis laborum eaque quos similique rerum repellat perspiciatis sit maiores, odio animi saepe vel soluta assumenda laudantium placeat sed. Vero, ex quo praesentium officia officiis nihil nemo eligendi optio labore earum exercitationem ut suscipit a nam nostrum numquam sapiente, cupiditate sed deserunt sequi aliquam alias iure possimus. Eos est vero commodi quisquam obcaecati officia accusamus veniam doloribus dolorem. Explicabo?
                                </p>
                                </Container>
                            </div>
                        </div>

                        <div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ModuleSecriptions