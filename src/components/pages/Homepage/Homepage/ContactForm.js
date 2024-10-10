import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <h2 id="contact" className="text-center">联系我们 / Contact Us</h2>
                    <div className="form-group">
                        <form name="contact" method="post" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <p hidden>
                                <label>不要填写这个字段如果你是人类: <input name="bot-field" /></label>
                            </p>
                            <div className="mb-3">
                                <label htmlFor="studentName" className="form-label">学生姓名 / Student Name</label>
                                <input type="text" id="studentName" name="studentName" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="parentWeChat" className="form-label">家长微信号 / Parent WeChat ID</label>
                                <input type="text" id="parentWeChat" name="parentWeChat" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">联系邮箱 / Contact Email</label>
                                <input type="email" id="email" name="email" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="course" className="form-label">所学课程 / Courses Enrolled</label>
                                <input type="text" id="course" name="course" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="grade" className="form-label">学生入学年级 / Grade Applying For</label>
                                <select id="grade" name="grade" className="form-select" required>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">留言 / Message</label>
                                <textarea id="message" name="message" className="form-control" placeholder="请在此输入您的留言" required></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">提交 / Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
