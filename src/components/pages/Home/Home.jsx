import React from 'react'
import Header from '../../partials/Header'
import { PageTitle } from '../../helpers/functions-general'

const Home = () => {
    PageTitle('Database - School')
    const [showSideBar, setShowSideBar] = React.useState(false);
    
    return (
        <>
            <div className={`home`}>
                <Header />
                <table>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Class</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                    </tr>
                    <tr>
                        <td>Ken Khoi</td>
                        <td>SC400122</td>
                        <td>Science 4</td>
                        <td>17</td>
                        <td>Male</td>
                        <td>KKhoi@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Ken Khoi</td>
                        <td>SC400122</td>
                        <td>Science 4</td>
                        <td>17</td>
                        <td>Male</td>
                        <td>KKhoi@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Ken Khoi</td>
                        <td>SC400122</td>
                        <td>Science 4</td>
                        <td>17</td>
                        <td>Male</td>
                        <td>KKhoi@gmail.com</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Home