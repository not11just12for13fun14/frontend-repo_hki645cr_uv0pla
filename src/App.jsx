import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import StatePage from './pages/State'
import CityPage from './pages/City'
import LocalService from './pages/LocalService'
import { AboutPage, MenuPage, LocationsPage, CateringPage, LicensingPage, EventsPage, WholesalePage, EmploymentPage, ContactPage } from './pages/static/TopPages'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Top-level static pages */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/catering" element={<CateringPage />} />
      <Route path="/licensing" element={<LicensingPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/wholesale" element={<WholesalePage />} />
      <Route path="/employment" element={<EmploymentPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Service hubs */}
      <Route path="/:serviceKey" element={<Service />} />

      {/* State and cities */}
      <Route path="/:stateKey" element={<StatePage />} />
      <Route path="/:stateKey/:cityKey" element={<CityPage />} />

      {/* Local services */}
      <Route path="/:stateKey/:cityKey/:serviceKey" element={<LocalService />} />

      {/* Legacy */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
