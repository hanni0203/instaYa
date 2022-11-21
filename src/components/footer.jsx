import React from 'react'
import '../assets/css/footer.css'


export default function Footer() {
    return (
    
        <footer id="footer" className="footer">

            <div className="footer-content">
                <div className=" container-fluid">
                    <div className="row">
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info" >
                                <img style={{ width: 190, height: 90}} src="src/assets/img/imagenlogo.jpg " alt="imagen logo" />
                                <p>
                                    
                                    
                                    <strong>Phone:</strong> +1 5589 55488 55<br/>
                                    <strong>Email:</strong> info@instaya.com<br/>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Sobre Nosotros</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Quienes Somos</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Casos de Éxito</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Trabaja con Nosotros</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Términos y Condiciones</a></li>
                                
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Contáctanos</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">info@instaya,com</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Preguntas Frecuentes</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Cobertura</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Suscribete</h4>
                            <p>Recibe informacion en nuestros canales digitales </p>
                            <form action="" method="post">
                                <input type="email" name="email"/><input type="submit" value="Suscribete"/>
                            </form>

                        </div>

                    </div>
                </div>
                
                <div className="footer-legal text-center">
                    <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

                        <div className="d-flex flex-column align-items-center align-items-lg-start">
                            <div className="copyright">
                                &copy;<strong><span>instaYa</span></strong>. Síguenos
                            </div>
                            <div className="credits">
                                {/*<!-- All the links in the footer should remain intact. -->
                                <!-- You can delete the links only if you purchased the pro version. -->
                                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                                !-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/herobiz-bootstrap-business-template/ -->
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                */}
                            </div>
                        </div>

                        <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>                         
                    </div> 
                </div> 
            </div>
           
            
        </footer>
    )
   
  
}
