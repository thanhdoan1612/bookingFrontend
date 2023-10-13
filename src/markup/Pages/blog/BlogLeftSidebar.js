import React from 'react'
import { Link } from 'react-router-dom';

const leftImg = [
    {
        image: require('../../../images/blog/grid/pic1.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.',

    },
    {
        image: require('../../../images/blog/grid/pic2.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.',

    },
    {
        image: require('../../../images/blog/grid/pic3.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.',

    },
    {
        image: require('../../../images/blog/grid/pic4.jpg'),
        date: 'September 10, 2017',
        author: 'Demongo',
        comment: '5k',
        title: 'WADA to investigate fresh Russian Olympic doping claims',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.',

    },
]


const bg3 = require('../../../images/banner/bnr1.jpg');
function BlogLeftSidebar(props) {

    return (
        <div>
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Blogs</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Home</Link></li>
                                <li>Blogs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full content-inner-2 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 m-b10">
                            {leftImg.map((item, index) => (
                                <div className="blog-post blog-md clearfix" key={index}>
                                    <div className="dlab-post-media dlab-img-effect zoom-slow radius-sm">
                                        <Link><img src={item.image} alt="" /></Link>
                                    </div>
                                    <div className="dlab-post-info">
                                        <div className="dlab-post-meta">
                                            <ul className="d-flex align-items-center">
                                                <li className="post-date">{item.date}</li>
                                                <li className="post-author">By <Link>{item.author}</Link> </li>
                                                <li className="post-comment"><Link>{item.comment}</Link> </li>
                                            </ul>
                                        </div>
                                        <div className="dlab-post-title ">
                                            <h4 className="post-title font-24"><Link href="blog-details.html">{item.title}</Link></h4>
                                        </div>
                                        <div className="dlab-post-text">
                                            <p>{item.desc}</p>
                                        </div>
                                        <div className="dlab-post-readmore blog-share">
                                            <Link to={'./blogdetails'} title="READ MORE" rel="bookmark" className="site-button-link border-link black">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="pagination-bx clearfix text-center">
                                <ul className="pagination">
                                    <li className="previous"><Link><i className="ti-arrow-left"></i> Prev</Link></li>
                                    <li className="active"><Link>1</Link></li>
                                    <li><Link>2</Link></li>
                                    <li><Link>3</Link></li>
                                    <li className="next"><Link>Next <i className="ti-arrow-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 sticky-top">
                            <aside className="side-bar">
                                <div className="widget">
                                    <h6 className="widget-title style-1">Search</h6>
                                    <div className="search-bx style-1">
                                        <form role="search" method="post">
                                            <div className="input-group">
                                                <input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
                                                <span className="input-group-btn">
                                                    <button type="submit" className="fa fa-search text-primary"></button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget recent-posts-entry">
                                    <h6 className="widget-title style-1">Recent Posts</h6>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dlab-post-media"> <img src={require('../../../images/blog/recent-blog/pic1.jpg')} width="200" height="143" alt="" /> </div>
                                            <div className="dlab-post-info">
                                                <div className="dlab-post-header">
                                                    <h6 className="post-title"><Link>World’s largest Muslim group denounces Islamist extremism</Link></h6>
                                                </div>
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-date">Sep 18, 2017</li>
                                                        <li className="post-comment"><Link>5k</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-post clearfix">
                                            <div className="dlab-post-media"> <img src={require('../../../images/blog/recent-blog/pic2.jpg')} width="200" height="160" alt="" /> </div>
                                            <div className="dlab-post-info">
                                                <div className="dlab-post-header">
                                                    <h6 className="post-title"><Link>Five Solomon islands swallowed by the sea</Link></h6>
                                                </div>
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-date">Sep 18, 2017</li>
                                                        <li className="post-comment"><Link>5k</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-post clearfix">
                                            <div className="dlab-post-media"> <img src={require('../../../images/blog/recent-blog/pic3.jpg')} width="200" height="160" alt="" /> </div>
                                            <div className="dlab-post-info">
                                                <div className="dlab-post-header">
                                                    <h6 className="post-title"><Link>U.S. destroyer sails near disputed Chinese island</Link></h6>
                                                </div>
                                                <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-date">Sep 18, 2017</li>
                                                        <li className="post-comment"><Link>5k</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="widget widget_gallery gallery-grid-3">
                                    <h6 className="widget-title style-1">Our services</h6>
                                    <ul>
                                        <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('../../../images/gallery/pic2.jpg')} alt="" /></Link></div></li>
                                        <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('../../../images/gallery/pic1.jpg')} alt="" /></Link></div></li>
                                        <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('../../../images/gallery/pic5.jpg')} alt="" /></Link></div></li>
                                        <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('../../../images/gallery/pic7.jpg')} alt="" /></Link></div></li>
                                        <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('../../../images/gallery/pic8.jpg')} alt="" /></Link></div></li>
                                        <li><div className="dlab-post-thum"><Link className="dlab-img-overlay1 dlab-img-effect zoom-slow"><img src={require('../../../images/gallery/pic9.jpg')} alt="" /></Link></div></li>
                                    </ul>
                                </div>

                                <div className="widget widget_archive">
                                    <h6 className="widget-title style-1">Categories List</h6>
                                    <ul>
                                        <li><Link>aciform</Link></li>
                                        <li><Link>championship</Link></li>
                                        <li><Link>chastening</Link></li>
                                        <li><Link>clerkship</Link></li>
                                        <li><Link>disinclination</Link></li>
                                    </ul>
                                </div>

                                <div className="widget widget-newslatter">
                                    <h6 className="widget-title style-1">Newsletter</h6>
                                    <div className="news-box">
                                        <p>Enter your e-mail and subscribe to our newsletter.</p>
                                        <form className="dzSubscribe" action="script/mailchamp.php" method="post">
                                            <div className="dzSubscribeMsg"></div>
                                            <div className="input-group">
                                                <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email" />
                                                <button name="submit" value="Submit" type="submit" className="site-button btn-block radius-no">Subscribe Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogLeftSidebar;