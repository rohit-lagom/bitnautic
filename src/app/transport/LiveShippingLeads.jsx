'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function LiveShippingLeads() {
  const [selectedTab, setSelectedTab] = useState('LCL');

  const shippingLeads = {
    LCL: [
      { from: 'London', to: 'Abashiri Ko (Japan)', days: 3 },
      { from: 'Ballina (Australia)', to: 'Aasiaat (Greenland)', days: 9 },
      { from: 'Calcutta (India)', to: 'Kobenhavn (Denmark)', days: 10 },
      { from: 'Dublin (Ireland)', to: 'Anyer Lor (Indonesia)', days: 6 },
      { from: 'Dublin (Ireland)', to: 'Ballina (Australia)', days: 8 },
      { from: 'Akrahamn (Norway)', to: 'Algeciras (Spain)', days: 5 },
    ],
    FCL: [
      { from: 'Bedi (India)', to: 'Belekeri (India)', days: 19 },
      { from: 'Ballina (Australia)', to: 'Beypore (India)', days: 12 },
      { from: 'Brevik (Norway)', to: 'Beypore (India)', days: 20 },
      { from: 'Akrahamn (Norway)', to: 'Algeciras (Spain)', days: 5 },
      { from: 'Bergkvara (Sweden)', to: 'Ballina (Australia)', days: 9 },
      { from: 'Bristol (UnitedStates)', to: 'Belekeri (India)', days: 12 },
    ],
    Bulk: [
      { from: 'Algeciras (Spain)', to: 'Calcutta (India)', days: 14 },
      { from: 'Bahia Harris (Chile)', to: 'Dublin (Ireland)', days: 25 },
      { from: 'Algoma (UnitedStates)', to: 'Beypore (India)', days: 30 },
      { from: 'Kiel (Germany)', to: 'Algoma (UnitedStates)', days: 13 },
      { from: 'Berkeley (UnitedStates)', to: 'Kobenhavn (Denmark)', days: 3 },
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
      'United Kingdom': 'gb',
      UK: 'gb',
    };

    const lowercasePort = port.toLowerCase();

    // Special case: London
    if (lowercasePort.includes('london')) {
      return `https://flagcdn.com/24x18/gb.png`;
    }

    const match = Object.entries(countryMap).find(([name]) =>
      lowercasePort.includes(name.toLowerCase())
    );

    return `https://flagcdn.com/24x18/${match ? match[1] : 'us'}.png`;
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px] opacity-10" />
      <div className="absolute top-32 right-20 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[100px] opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Live Shipping Leads</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real-time shipping opportunities across different container types and routes
          </p>
        </motion.div>

        {/* Tab Switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-2 shadow-lg flex gap-2">
            {['LCL', 'FCL', 'Bulk'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedTab === tab
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-blue-100 hover:text-white hover:bg-blue-600/20'
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shippingLeads[selectedTab].map((lead, index) => (
            <motion.div
              key={`${lead.from}-${lead.to}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                    <img
                      src={getFlagUrl(lead.from)}
                      alt="from-flag"
                      className="w-5 h-4 rounded-sm"
                    />
                    {lead.from}
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-300 my-2" />
                  <div className="text-lg font-bold text-white flex items-center gap-2">
                    <img
                      src={getFlagUrl(lead.to)}
                      alt="to-flag"
                      className="w-5 h-4 rounded-sm"
                    />
                    {lead.to}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400">{lead.days}</div>
                  <div className="text-sm text-white/70">days</div>
                </div>
              </div>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg font-semibold transition-all duration-300">
                Get Quote
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Leads
          </button>
        </div>
      </div>
    </section>
  );
}
