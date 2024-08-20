import { useEffect, useState } from "react";
import logo from '../assets/images/Flêche.jpeg'

interface Charges {
  workTools: number;
  rent: number;
  bills: number;
  travel: number;
  others: number;
}

interface FunctionalChargesProps {
  onUpdate: (total: number) => void;
}

const FunctionalCharges : React.FC<FunctionalChargesProps> = ({ onUpdate }) => {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!isVisible);
  };
 

  const [charges, setCharges] = useState<Charges>({
    workTools: 0,
    rent: 0,
    bills: 0,
    travel: 0,
    others: 0,
  });

  const calculateTotal = () => {
    return Object.values(charges).reduce((acc, charge) => acc + charge, 0);
  };

  useEffect(() => {
    onUpdate(calculateTotal());
  }, [charges]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharges({
      ...charges,
      [e.target.name]: parseFloat(e.target.value) || 0,
    });
  };

  return (
    <div className="card div2">
      <div className="card-body">
        <h5 className="card-title">Charges Fonctionnelles</h5>
        <button onClick={toggleVisibility} className="button" >{isVisible ? 'Frais de fonctionnement' : 'Frais de fonctionnement'} <img src={logo} alt="Fleche logo" className="fleche" /> </button>
        <div style={{ display: isVisible ? 'block' : 'none'}}>
          <div className="mb-3">
            <label className="form-label">Outils de Travail</label>
            <input
              type="number"
              className="form-control"
              name="workTools"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Loyer bureau</label>
            <input
              type="number"
              className="form-control"
              name="rent"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Factures</label>
            <input
              type="number"
              className="form-control"
              name="bills"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Voyage</label>
            <input
              type="number"
              className="form-control"
              name="travel"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Autres</label>
            <input
              type="number"
              className="form-control"
              name="others"
              onChange={handleChange}
            />
          </div>
          
        </div>
        <h6><span> Soit un total de: </span> <span> {calculateTotal()} Par mois </span></h6>
      </div>
    </div>
  );
};

export default FunctionalCharges;