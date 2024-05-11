import React from 'react';

function Footer() {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <h4 className="text-white mb-3">Made By Kelompok 10</h4>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="#">Sheyhan Rafael Adlinugroho</a>
                                <a href="#">Theon Anabel Deadora</a>
                                <a href="#">Alfin Sanders</a>
                                <a href="#">Juan Farrel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
