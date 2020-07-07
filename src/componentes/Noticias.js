import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Noticia from './Noticia';

const Noticias = (props) => {

    const nodeRef = React.useRef(null);

    return (
        <div className="row">
            <TransitionGroup>
                {props.noticias.map(noticia => (
                    <CSSTransition
                        nodeRef={nodeRef}
                        key = {noticia.url}
                        classNames="fade"
                        timeout={500}
                    >
                        <Noticia noticia = {noticia}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default Noticias;