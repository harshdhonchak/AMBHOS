import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import styles from './cards1.module.css';
import * as Icon from 'react-bootstrap-icons';





function Cards1(props) {
    return (
        <>

            <Card className={styles.main_card}

            >

                <Card.Body>
                    <footer ><h1 className={styles.card_content}>{props.classes}</h1>
                        <p className={styles.wishlist}>ADD TO WISHLIST {' '}<Icon.BookmarkFill className={styles.bookmark} /></p>

                    </footer>



                </Card.Body>
            </Card>
        </>
    )
}
export default Cards1;