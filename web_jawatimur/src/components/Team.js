import React from 'react';

function Team() {
    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Team</h6>
                    <h1 className="mb-5">Our Team</h1>
                </div>
                <div className="owl-carousel testimonial-carousel position-relative">
                    <div className="testimonial-item text-center">
                        <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style={{ width: '80px', height: '80px' }} alt="" />
                        <h5 className="mb-0">Sheyhan Rafael Adlinugroho</h5>
                        <p>Mahasiswa Informatika</p>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{ width: '80px', height: '80px' }} alt="" />
                        <h5 className="mb-0">Theon Anabel Deadora</h5>
                        <p>Mahasiswa Informatika</p>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style={{ width: '80px', height: '80px' }} alt="" />
                        <h5 className="mb-0">Alfin Sanders</h5>
                        <p>Mahasiswa Informatika</p>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg" style={{ width: '80px', height: '80px' }} alt="" />
                        <h5 className="mb-0">Juan Farrel</h5>
                        <p>Mahasiswa Informatika</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
