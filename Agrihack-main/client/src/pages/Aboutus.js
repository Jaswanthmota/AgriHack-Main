import classes from './Aboutus.module.css';
function Aboutus(){
    return <div className="container">
        <h3 className="text-center mt-5"><img src='./about.png' alt='...' style={{width:'20%'}}/></h3>
        <div className="row ">
            <div className="col ">
                <img src="https://www.webclickindiaindelhi.com/images/sitepages/company-profile.jpg" alt="web-img"/>
            </div>
            <div className="col mt-5 pt-5">
                <h5 className={classes.text}>Agri-Dairy provides high class Website designing,development and SEO services.
                We offer all our services at the best price available in the market.
                We have a team of multi-disciplinary and experienced designers and developers, who work hard to deliver a well-designed site to the client. 
                We always use ultra-modern and advanced software while designing your site, 
                so your customers will never face any trouble while using and insecurity during transactions.
                Our services are best in the field and wallet-friendly as well. 
                We also commit to fulfilling all your demands related to our site within stipulated time period. 
                You just have to trust us, and we assure to never break it.
                </h5>
            </div>
        </div>
    </div>;
}

export default Aboutus;