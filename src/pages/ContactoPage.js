import '../styles/contacto.css';

const ContactoPage = (props) => {

    return (
        <main className="holder contacto">
            <div>
                <h2>Completa el formulario</h2>
                <form action="" className="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Teléfono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Comentario</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También pueden contactarse a través de estos medios</p>
                <ul>
                    <li>Telefono: 2154545</li>
                    <li><i className="fa-brands fa-facebook"></i> <span> info sahdsahd shdja</span></li>
                    <li><i className="fa-brands fa-instagram"></i>: red social 2</li>
                <li>red social 3</li>
                <li>red social 4</li>
                <li>Mail: </li>
            </ul>
            <div className="mapa">
                <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.2192342946532!2d-58.42268788758324!3d-34.598617372843336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca62d4cf1563%3A0x686de505d84c67e6!2sAv.%20Medrano%20951%2C%20C1179AAQ%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1716212973998!5m2!1ses-419!2sar" style={{ border: 0, width:500, height:300 }} >
                            
                        </iframe>


            </div>
        </div>
    </main >
    )



}


export default ContactoPage;