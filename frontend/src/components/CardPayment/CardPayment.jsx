import React from 'react'

const CardPayment = () => {
    return (<>
        {/* Step 2: Card Payment */}
        <div className="modal fade" id="exampleModalToggle2" tabIndex="-1" aria-labelledby="exampleModalToggleLabel2" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Pay with card</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* Email */}
                        <div className="mb-3">
                            <label htmlFor="emailCard" className="form-label">Email</label>
                            <input type="email" className="form-control" id="emailCard" placeholder="you@example.com" />
                        </div>

                        {/* Card Info */}
                        <label className="form-label">Card information</label>
                        <div className="mb-3">
                            <input type="text" className="form-control mb-2" placeholder="1234 1234 1234 1234" />
                            <div className="row g-2">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="MM / YY" />
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    <input type="text" className="form-control" placeholder="CVC" />
                                    <div className="card-icons ms-2 d-flex align-items-center">
                                        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" style={{ height: '24px' }} />
                                        <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" style={{ height: '24px' }} />
                                        <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" style={{ height: '24px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cardholder Name */}
                        <div className="mb-3">
                            <label className="form-label">Cardholder name</label>
                            <input type="text" className="form-control" placeholder="Full name on card" />
                        </div>

                        {/* Country */}
                        <div className="mb-4">
                            <label className="form-label">Country or region</label>
                            <select className="form-select">
                                <option>India</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                            </select>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-primary w-100">Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default CardPayment