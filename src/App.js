import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminSidebar from './components/AdminSidebar';
import DivisionManagerSidebar from "./components/DivisionManagerSidebar";
import ManagerApplicantSidebar from "./components/ManagerApplicantSidebar";
import Login from "./components/Login";
import Register from './components/Register';
import TrainerSidebar from "./components/TrainerSidebar";
import TraineeSidebar from "./components/TraineeSidebar";
import AccountRequest from './components/AccountRequest';
import Enrollmentkey from "./components/Enrollmentkey";
import "./css/style.css";

//admin
import AdminHome from "./pages/Admin/AdminHome";
import AdminInbox from "./pages/Admin/AdminInbox";
import AdminCertificates from "./pages/Admin/AdminCerticates";
import AdminFeedback from "./pages/Admin/AdminFeedback";
import AdminInfo from "./pages/Admin/AdminInfo";
import AdminPaymentMng from "./pages/Admin/AdminPaymentMng";
import AdminReport from "./pages/Admin/AdminReport";
import AdminTrainingMng from "./pages/Admin/AdminTrainingMng";
import AdminUserManagement from "./pages/Admin/AdminUserManagement";


//divisionmanager
import DivisionmanagerHome from "./pages/DivisionManager/DivisionManagerHome";
import DivisionManagerInfo from "./pages/DivisionManager/DivisionManagerInfo";
import DivisionManagerReport from "./pages/DivisionManager/DivisionManagerReport";


//trainer
import TrainerHome from "./pages/Trainer/TrainerHome";
import TrainerInfo from "./pages/Trainer/TrainerInfo";
import TrainerMaterials from "./pages/Trainer/TrainerMaterials";
import TrainerTrainings from "./pages/Trainer/TrainerTrainings";
import TrainerFeedback from "./pages/Trainer/TrainerFeedback";
import TrainerAttendance from "./pages/Trainer/TrainerAttendance";

//trainee
import TraineeTrainings from "./pages/Trainee/TraineeTrainings";
import TraineeCertificates from "./pages/Trainee/TraineeTrainings";
import TraineeHome from "./pages/Trainee/TraineeHome";
import TraineeEnrollment from "./pages/Trainee/TraineeEnrollment";
import TraineeFeedback from "./pages/Trainee/TraineeFeedback";
import TraineeInfo from "./pages/Trainee/TraineeInfo";
import TraineeMaterials from "./pages/Trainee/TraineeMaterials";
import TraineeMessages from "./pages/Trainee/TraineeMessages";


//managerapplicant
import ManagerApplicantInfo from "./pages/ManagerApplicant/ManagerApplicantInfo";
import ManagerApplicantMessages from "./pages/ManagerApplicant/ManagerApplicantMessages";
import ManagerApplicantEnrollment from "./pages/ManagerApplicant/ManagerApplicantEnrollment";
import ManagerApplicantFeedback from "./pages/ManagerApplicant/ManagerApplicantFeedback";
import ManagerApplicantMaterials from "./pages/ManagerApplicant/ManagerApplicantMaterials";
import ManagerApplicantCertificates from "./pages/ManagerApplicant/ManagerApplicantCertificates";
import ManagerApplicantHome from "./pages/ManagerApplicant/ManagerApplicantHome";









const App = () => {


  return (

    <div>



      <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/accountrequest" element={<AccountRequest />} />

          <Route path="/register" element={<Register />} />
          <Route path="/Admin" element={<AdminSidebar />}>
            <Route path="info" element={<AdminInfo />} />
            <Route path="" element={<AdminHome />} />
            <Route path="inbox" element={<AdminInbox />} />
            <Route path="certificates" element={<AdminCertificates />} />
            <Route path="feedback" element={<AdminFeedback />} />
            <Route path="trainingmng" element={<AdminTrainingMng />} />
            <Route path="usermanagement" element={<AdminUserManagement />} />
            <Route path="payment" element={<AdminPaymentMng />} />
            <Route path="report" element={<AdminReport />} />
          </Route>
          <Route path="/trainee" element={<TraineeSidebar />} >
            <Route path="home" element={<TraineeHome />} />
            <Route path="messages" element={<TraineeMessages />} />
            <Route path="certificates" element={<TraineeCertificates />} />
            <Route path="enrollment" element={<TraineeEnrollment />} />
            <Route path="feedback" element={<TraineeFeedback />} />
            <Route path="info" element={<TraineeInfo />} />
            <Route path="materials" element={<TraineeMaterials />} />
            <Route path="trainings" element={<TraineeTrainings />} >

              <Route path='' element={<Enrollmentkey />} />

            </Route>
          </Route>
          <Route path="/trainer" element={<TrainerSidebar />} >
            <Route path="" element={<TrainerHome />} />
            <Route path="attendance" element={<TrainerAttendance />} />
            <Route path="trainings" element={<TrainerTrainings />} />
            <Route path="info" element={<TrainerInfo />} />
            <Route path="feedback" element={<TrainerFeedback />} />
            <Route path="materials" element={<TrainerMaterials />} />
          </Route>
          <Route path="/managerapplicant" element={<ManagerApplicantSidebar />} >
            <Route path="" element={<ManagerApplicantHome />} />
            <Route path="inbox" element={<ManagerApplicantMessages />} />
            <Route path="certificates" element={<ManagerApplicantCertificates />} />
            <Route path="info" element={<ManagerApplicantInfo />} />
            <Route path="enrollment" element={<ManagerApplicantEnrollment />} />
            <Route path="feedback" element={<ManagerApplicantFeedback />} />
            <Route path="materials" element={<ManagerApplicantMaterials />} />
            <Route path="trainings" element={<ManagerApplicantMaterials />} />
          </Route>
          <Route path="/divisionmanager" element={<DivisionManagerSidebar />} >
            <Route path="home" element={<DivisionmanagerHome />} />
            <Route path="inbox" element={<DivisionManagerInfo />} />
            <Route path="certificates" element={<DivisionManagerReport />} />
          </Route>
        </Routes>



      </Router>



    </div>

  );
};


export default App;

