import React from 'react';
import './teamItem.scss';

function TeamItem(props) {
    return (
        <div className="col-xs-12  col-lg-4 member-info text-center">
            <div class="pb-image-box pb-image-preloader-animation-enable pb-image-text-enable mt-5">
                <div class="pb-image">
                    <img
                        className="atipic-team"
                        src={'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png'}
                        alt={props.name}
                    />
                </div>
                <div class="text-center mt-3">
                    <h6 class="pb-image-text-caption">{props.name}</h6>
                    <div class="pb-image-text-function text-muted">{props.description}</div>
                </div>
            </div>
        </div>
    );
}

export default TeamItem;
