'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function LiveShippingLeads() {
  const [selectedTab, setSelectedTab] = useState('LCL');

  const shippingLeads = {
    LCL: [
      { from: 'London', to: 'Abashiri Ko (Japan)', days: 3 },
      { from: 'Londonderry', to: 'Aeroskobing (Denmark)', days: 15 },
      { from: 'Ballina (Australia)', to: 'Aasiaat (Greenland)', days: 9 },
      { from: 'Calcutta (India)', to: 'Kobenhavn (Denmark)', days: 10 },
      { from: 'Dublin (Ireland)', to: 'Anyer Lor (Indonesia)', days: 6 },
      { from: 'Dublin (Ireland)', to: 'Ballina (Australia)', days: 8 },
    ],
    FCL: [
      { from: 'Bedi (India)', to: 'Belekeri (India)', days: 19 },
      { from: 'Ballina (Australia)', to: 'Beypore (India)', days: 12 },
      { from: 'Brevik (Norway)', to: 'Beypore (India)', days: 20 },
      { from: 'Akrahamn (Norway)', to: 'Algeciras (Spain)', days: 5 },
      { from: 'Bergkvara (Sweden)', to: 'Ballina (Australia)', days: 9 },
      { from: 'Bristol (United States)', to: 'Belekeri (India)', days: 12 },
    ],
    Bulk: [
      { from: 'Algeciras (Spain)', to: 'Calcutta (India)', days: 14 },
      { from: 'Bahia Harris (Chile)', to: 'Dublin (Ireland)', days: 25 },
      { from: 'Algoma (United States)', to: 'Beypore (India)', days: 30 },
      { from: 'Kiel (Germany)', to: 'Algoma (United States)', days: 13 },
      { from: 'Berkeley (United States)', to: 'Kobenhavn (Denmark)', days: 3 },
      { from: 'Bedi (India)', to: 'Kobenhavn (Denmark)', days: 8 },
    ],
  };

  const getFlagUrl = (port) => {
    const countryMap = {
      Japan: 'jp',
      Denmark: 'dk',
      Australia: 'au',
      Greenland: 'gl',
      India: 'in',
      Ireland: 'ie',
      Spain: 'es',
      Chile: 'cl',
      UnitedStates: 'us',
      Germany: 'de',
      Norway: 'no',
      Sweden: 'se',
      Indonesia: 'id',
    };

    const match = Object.entries(countryMap).find(([name]) =>
      port.toLowerCase().includes(name.toLowerCase())
    );

    const countryCode = match ? match[1] : 'un';
    return `https://flagcdn.com/24x18/${countryCode}.png`;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Live Shipping Leads
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time shipping opportunities across different container types and routes
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {['LCL', 'FCL', 'Bulk'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab === 'LCL'
                  ? 'Less Container Load'
                  : tab === 'FCL'
                  ? 'Full Container Load'
                  : 'In Bulk'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shippingLeads[selectedTab].map((lead, index) => (
            <motion.div
              key={`${lead.from}-${lead.to}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <img
                      src={getFlagUrl(lead.from)}
                      alt="from-flag"
                      className="w-5 h-4 rounded-sm"
                    />
                    {lead.from}
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-600 my-2" />
                  <div className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <img
                      src={getFlagUrl(lead.to)}
                      alt="to-flag"
                      className="w-5 h-4 rounded-sm"
                    />
                    {lead.to}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{lead.days}</div>
                  <div className="text-sm text-gray-600">days</div>
                </div>
              </div>
              <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded-lg font-semibold transition-colors duration-300">
                Get Quote
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View All Leads
          </button>
        </div>
      </div>
    </section>
  );
}