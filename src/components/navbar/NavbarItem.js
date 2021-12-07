import React from 'react'

function NavbarItem() {
    return (
            <div className='d-flex justify-content-end align-items-center mt-4 items-wrapper'>
                    <a className="nav-link active" aria-current="page" href="/">
                        <div className="nav-item d-flex flex-column align-items-center justify-content-center ">
                            <FontAwesomeIcon icon={faHome} className='icons'></FontAwesomeIcon>
                                <p>Acasa</p>
                        </div>
                    </a>
            </div>
    )
}

export default NavbarItem
