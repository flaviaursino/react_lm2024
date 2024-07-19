import '../styles/home.css';


const HomePage = (props) => {
    
    return(
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avión" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero quam dolore sit deleniti, attt quibusdam quasi velit sint, ullam molestias animi perferendis blanditiis nobis labore fugiat harum soluta mollitia?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque error omnis quisquam sed! Odio et nisi voluptatem alias officiis adipisci natus autem amet qui, tenetur, culpa unde molestias reprehenderit voluptates!</p>
                </div>

                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Gomez - zapatos.com</span>

                    </div>
                </div>

            </div>
        </main>
    )



}


export default HomePage;