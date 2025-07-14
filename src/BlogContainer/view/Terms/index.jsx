import React from "react";
// import TermsFooter from "../../CommonComponent/Footer/TermsFooter";
import Footer from "../../CommonComponent/Footer/Footer";
import Header from "../../CommonComponent/Header/Header";

const TermsPage = () => {
    return (
        <>
            <Header isDarkLogo={true} isPolicy={true} />
            <div className="md-p-0 pb-4 bg-white">
                <div className="w-full md:h-[400px] h-[200px] bg-[#000] flex justify-center items-center text-white">
                    <p className="md:text-5xl text-[32px] font-bold">Terms and conditions</p>
                </div>

                <div className="flex items-center justify-center w-full">
                    <div className=" w-full md:px-10 px-4 sm:px-6 lg:px-[120px]">
                        <div className="condition-article my-10">
                            <p className="py-4">Effective Date: August 26, 2024</p>
                            <h3>Introduction</h3>
                            <p>Welcome to Bon's platform. These Terms and Conditions ("Terms") govern your use of Bon, a platform designed to help users manage their credit cards and reward timely payments. By accessing or using Bon, you agree to comply with and be bound by these Terms. Please read them carefully before using the platform. If you do not agree with these Terms, you must discontinue using the platform immediately.</p>

                            <h3>Eligibility & Membership</h3>
                            <p>Bon is a members-only platform available to users residing in the USA. To use Bon, you must:</p>
                            <ul>
                                <li>Be at least 15 years old.</li>
                                <li>Possess a valid credit card issued by a US financial institution.</li>
                                <li>Comply with all applicable local, state, and federal laws. Bon reserves the right to deny or revoke membership to any user at its discretion.</li>
                            </ul>

                            <h3>Services Provided by Bon</h3>
                            <p>Bon enables users to:</p>
                            <ul>
                                <li>Link multiple credit cards from various financial institutions through Plaid or similar services.</li>
                                <li>View and manage credit card balances, payment due dates, and credit utilization in one place.</li>
                                <li>Receive rewards for timely payments made through Bon's platform. In the future, Bon may offer additional financial services such as lending, insurance, and other related products. These services will be subject to separate terms and conditions as applicable.</li>
                            </ul>

                            <h3>User Accounts & Security</h3>
                            <p>To access Bon's services, users must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and must notify Bon immediately of any unauthorized access or security breaches. You are solely responsible for all activities that occur under your account.</p>

                            <h3>Third-Party Services (Plaid, Array, etc.)</h3>
                            <p>Bon integrates with third-party services, including but not limited to:</p>
                            <ul>
                                <li>Plaid for linking financial accounts and fetching transaction data.</li>
                                <li>Array for providing users with credit score and credit report services.</li>
                            </ul>

                            <h3>Fees & Payments</h3>
                            <p>Bon's platform is currently free to use for all members. However, Bon reserves the right to introduce subscription fees or charges for certain premium features in the future. Users will be notified of any such changes, and continued use of the platform after notification constitutes acceptance of any applicable fees.</p>

                            <h3>User Conduct & Prohibited Activities</h3>
                            <p>By using Bon, you agree to use the platform only for lawful purposes and in a manner consistent with these Terms. Prohibited activities include but are not limited to:</p>
                            <ul>
                                <li>Using the platform for any fraudulent, illegal, or unauthorized purpose.</li>
                                <li>Attempting to hack, damage, or disrupt the platform's operation or the experience of other users.</li>
                                <li>Engaging in activities that violate the intellectual property rights of Bon or third parties.</li>
                                <li>Misrepresenting your identity or affiliation with a person or entity. Bon reserves the right to investigate and take appropriate legal action against users who violate these terms, including suspending or terminating user accounts.</li>
                            </ul>

                            <h3>Account Termination</h3>
                            <p>Bon reserves the right to suspend or terminate your account at any time, without prior notice, for any reason, including but not limited to:</p>
                            <ul>
                                <li>Violation of these Terms and Conditions.</li>
                                <li>Fraudulent or unauthorized activity on the platform.</li>
                                <li>Extended periods of inactivity (as determined by Bon).</li>
                                <li>If required by applicable law or a request by law enforcement. Upon termination, your right to use Bon will immediately cease. Any rewards or pending transactions may be forfeited at Bon's discretion.</li>
                            </ul>

                            <h3>User-Submitted Content</h3>
                            <p>Any content, feedback, or suggestions submitted by users (e.g., reviews, comments, or ideas) becomes the property of Bon. By submitting such content, you grant Bon an irrevocable, royalty-free, perpetual license to use, modify, reproduce, publish, or distribute the content in any form and for any purpose. You acknowledge that you are the owner of the content and that it does not infringe on the rights of third parties.</p>

                            <h3>Governing Law & Jurisdiction</h3>
                            <p>These Terms are governed by the laws of the State of [insert relevant state], without regard to its conflict of law principles. Any disputes arising out of or related to these Terms shall be brought exclusively in the state or federal courts located in [insert relevant jurisdiction], and you consent to the jurisdiction of such courts.</p>

                            <h3>Modifications to Terms</h3>
                            <p>Bon reserves the right to modify or update these Terms at any time, with or without notice. Users are responsible for regularly reviewing these Terms for updates. Continued use of the platform following the posting of changes constitutes acceptance of those changes. If you do not agree to the revised Terms, you must cease using Bon's platform.</p>

                            <h3>Disclaimer of Warranties</h3>
                            <p>Bon provides the platform and services "as is" and "as available" without any warranties or guarantees of any kind, either express or implied, including but not limited to:</p>
                            <ul>
                                <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement.</li>
                                <li>Warranties regarding the accuracy, reliability, or availability of the platform or services. Bon does not guarantee that the platform will be uninterrupted, error-free, or secure, and is not responsible for any disruptions or loss of data.</li>
                            </ul>

                            <h3>Indemnification</h3>
                            <p>You agree to indemnify, defend, and hold harmless Bon, its officers, directors, employees, and agents, from and against any claims, liabilities, damages, losses, or expenses (including legal fees) arising out of or related to:</p>
                            <ul>
                                <li>Your use of the platform or services.</li>
                                <li>Your violation of these Terms or applicable law.</li>
                                <li>Any user-generated content submitted by you. Bon reserves the right to assume the exclusive defense of any matter otherwise subject to indemnification by you, in which case you will cooperate fully with Bon.</li>
                            </ul>

                            <h3>Intellectual Property Rights</h3>
                            <p>All content, logos, graphics, designs, trademarks, service marks, and other materials on Bon's platform are the exclusive property of Bon or its licensors. You are not authorized to copy, reproduce, modify, distribute, or publicly display any of the materials without prior written consent from Bon.</p>

                            <h3>Limitation of Liability</h3>
                            <p>To the maximum extent permitted by law, Bon shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
                            <ul>
                                <li>Loss of profits, revenue, or data.</li>
                                <li>Damages arising from your use of or inability to use the platform.</li>
                                <li>Damages arising from third-party service failures. In no event shall Bon's liability exceed the total amount paid by you to Bon for using the platform, or $100, whichever is greater.</li>
                            </ul>

                            <h3>Third-Party Links & Services</h3>
                            <p>Bon's platform may contain links to third-party websites or services. These links are provided for convenience only, and Bon does not endorse, monitor, or control these third-party services. You agree that your use of such third-party links or services is at your own risk, and Bon disclaims any liability arising from your interaction with these third parties.</p>

                            <h3>Privacy Policy</h3>
                            <p>Your use of the platform is also governed by Bon's Privacy Policy, which outlines how your personal information is collected, used, and shared. By using Bon, you agree to the terms of our Privacy Policy, which can be found at https://www.bonhq.com/privacy-policy.</p>

                            <h3>Force Majeure</h3>
                            <p>Bon shall not be liable for any failure or delay in performing its obligations under these Terms if such failure or delay is caused by circumstances beyond Bon's reasonable control, including but not limited to natural disasters, government actions, labor strikes, power outages, or internet service provider failures.</p>

                            <h3>Severability</h3>
                            <p>If any provision of these Terms is found to be unlawful, void, or unenforceable, the remaining provisions shall continue in full force and effect.</p>

                            <h3>Entire Agreement</h3>
                            <p>These Terms, along with Bon's Privacy Policy and any other agreements or policies referenced herein, constitute the entire agreement between you and Bon regarding your use of the platform. No other agreements, representations, or promises not contained in these Terms shall be valid or binding.</p>

                            <h3>Contact Information</h3>
                            <p>If you have any questions or concerns regarding these Terms, please contact us at <a href="mailto:support@bonhq.com">support@bonhq.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <TermsFooter /> */}
            <Footer />
        </>
    )
}

export default TermsPage;