import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Newpassword from './Pages/Login/Newpassword';
import Verification from './Pages/Login/Verification';
import Verificationcode from './Pages/Login/Verificationcode';
import Dashboard from './Pages/Dashboard/Dashboard';
import TotalUsers from './Pages/Total Users/TotalUsers';
import ProfileUpdate from './Pages/profile Update/ProfileUpdate';
import NewApplication from './Pages/New Application/NewApplication';
import EMICollection from './Pages/EMI Collection/EMICollection';
import PendingEMI from './Pages/Pending EMI/PendingEMI';
import Wallet from './Pages/Wallet/Wallet';
import FraudCustomer from './Pages/Fraud Customer/FraudCustomer';
import Settings from './Pages/Settings/Settings';
import UserDetail from './Pages/Total Users/UserDetail';
import FraudUserDetail from './Pages/Fraud Customer/FraudUserDetail';
import VerifyOtp from './Pages/New Application/VerifyOtp';
import NewApplicationForm from './Pages/New Application/NewApplicationForm';
import ApplicationFirstForm from './Pages/New Application/ApplicationFirstForm';
import ApplicationSecondForm from './Pages/New Application/ApplicationSecondForm';
import ApplicationThirdForm from './Pages/New Application/ApplicationThirdForm';
import ApplicationFourthForm from './Pages/New Application/ApplicationFourthForm';
import PDFForm from './Pages/New Application/PDFForm';

import Notifications from './Pages/Push Notification/Notifications';
import CreateStaffID from './Pages/Create Staff ID/CreateStaffID';
import KYC from './Pages/KYC/KYC';
import Payment from './Pages/Payment/Payment';
import ShopkeeperReport from './Pages/Shopkeeper Report/ShopkeeperReport';
import KYCDetails from './Pages/KYC/KYCDetails';
import Walletmamagement from './Pages/Wallet/Walletmamagement';
import Shopkeeperreportdetails from './Pages/Shopkeeper Report/Shopkeeperreportdetails';
import CreateID from './Pages/KYC/CreateID';
import AddProduct from './Pages/Add Product/AddProduct';
import ProductList from './Pages/Add Product/ProductList';
import PushNotification from './Pages/Push Notification/PushNotification';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/newpassword" element={<Newpassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/verificationcode" element={<Verificationcode />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/newapplication" element={<NewApplication />} />
          <Route path="/verifyotp" element={<VerifyOtp />} />
          <Route path="/newapplicationform" element={<NewApplicationForm />} />
          <Route path="/applicationfirstform" element={<ApplicationFirstForm />} />
          <Route path="/applicationsecondform" element={<ApplicationSecondForm />} />
          <Route path="/applicationthirdform" element={<ApplicationThirdForm />} />
          <Route path="/applicationfourthform" element={<ApplicationFourthForm />} />
          <Route path="/pdfform" element={<PDFForm />} />
          <Route path="/emicollection" element={<EMICollection />} />
          <Route path="/users" element={<TotalUsers />} />
          <Route path="/pendingemi" element={<PendingEMI />} />
          <Route path="/frauduser_Detail" element={<FraudUserDetail />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/fraud_customer" element={<FraudCustomer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/userdetail" element={<UserDetail />} />
          <Route path="/profile" element={<ProfileUpdate />} />
          {/* <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/productlist" element={<ProductList />} /> */}
          {/* <Route path="/createstaffID" element={<CreateStaffID />} /> */}
          {/* <Route path="/notifications" element={<Notifications />} />
          <Route path="/push_notification" element={<PushNotification />} /> */}
          {/* <Route path="/kyc" element={<KYC />} /> */}
          {/* <Route path="/payment" element={<Payment />} /> */}
          {/* <Route path="/shopkeeper_report" element={<ShopkeeperReport />} /> */}
          {/* <Route path="/kycdetails" element={<KYCDetails />} /> */}
          {/* <Route path="/wallet_mamagement" element={<Walletmamagement />} /> */}
          {/* <Route path="/shopkeeper_report_details" element={<Shopkeeperreportdetails />} /> */}
          {/* <Route path="/createid" element={<CreateID />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
