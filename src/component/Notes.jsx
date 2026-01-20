import React, { useState, useMemo } from 'react';
import SearchBar from './SearchBar';
import EquipmentCard from './EquipmentCard';
import { equipments } from '../data/equipments';
import '../styles/Notes.css';

function Notes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const filteredEquipments = useMemo(() => {
    if (!searchQuery.trim()) return equipments;

    const query = searchQuery.toLowerCase();
    return equipments.filter(eq => 
      eq.name.toLowerCase().includes(query) ||
      eq.category.toLowerCase().includes(query) ||
      eq.shortDesc.toLowerCase().includes(query) ||
      eq.keywords.some(kw => kw.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="notes">
      <div className="notes-header">
        <h1>Equipment Notes</h1>
        <p>Select an equipment or search to view detailed notes</p>
      </div>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="notes-container">
        {selectedEquipment ? (
          <div className="notes-content">
            <div className="content-header">
              <button 
                className="back-button"
                onClick={() => setSelectedEquipment(null)}
              >
                ← Back
              </button>
              <h1>{selectedEquipment.name}</h1>
              <span className="category-badge">{selectedEquipment.category}</span>
            </div>
            <div className="content-body">
              {selectedEquipment.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('##')) {
                  return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('###')) {
                  return <h3 key={idx}>{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={idx}>
                      {items.map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.includes('|')) {
                  return (
                    <div key={idx} className="table-wrapper">
                      <table>{/* Simple table rendering */}</table>
                    </div>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>
          </div>
        ) : (
          <div className="notes-grid">
            {filteredEquipments.length > 0 ? (
              filteredEquipments.map(equipment => (
                <EquipmentCard 
                  key={equipment.id}
                  equipment={equipment}
                  onClick={() => setSelectedEquipment(equipment)}
                />
              ))
            ) : (
              <div className="no-results">
                <p>No equipment found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Notes;