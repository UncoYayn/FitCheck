import React from 'react';
import './styles/index.css';

import './styles/App.css';
import './styles/Home.css';
import './styles/navigation.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ChangePassword from "./pages/change_pw.js";


import Home from './pages/Home.jsx';
import Model from "./pages/model"
import CreateModel from './pages/create_model';
import EditModel from './pages/edit_model.js';

import Closet from './pages/closet.js';
import SearchCloset from './pages/search_clothing.js';
import Outfits from './pages/locker.js';
import AddClothing from './pages/add_clothing.js';

import Profile from "./pages/profile";
import Catalog from './pages/catalog';
import SearchLocker from './pages/search_outfits.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path='/' element={<Navigate to="/signup" />} />

          <Route path="/login" element={<Home />} />
          <Route path="/register" element={<Home />} />
          <Route path='/model/create' element={<CreateModel />} />

          <Route path='/closet' element={<Closet />} />
          <Route path='/closet/add' element={<AddClothing />} />
          <Route path='/closet/search' element={<SearchCloset />} />

          <Route path='/locker' element={<Outfits />} />
          <Route path='/locker/search' element={<SearchLocker />} />

          <Route path='/profile' element={<Profile />} />
          <Route path='/change-password' element={<ChangePassword />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/model' element={<Model />} />
          <Route path='/model/edit' element={<EditModel />} />
          <Route path='/model/create' element={<CreateModel />} />
          <Route path='/' element={<Navigate to="/signup" />} />

          <Route path='/model' element={<Model />} />
          <Route path='/model/edit' element={<EditModel />} />
          <Route path='/model/create' element={<CreateModel />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}


export default App;
