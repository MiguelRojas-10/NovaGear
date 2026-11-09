import Navbar from './Navbar';

export default function AdminDashboard({ user, onLogout }) {
  return (
    <>
      <Navbar user={user} onLogout={onLogout} />
      <div className="dashboard-container">
        <h2 style={{ marginBottom: '1.5rem' }}>Panel de Administración Global</h2>
        
        <div className="grid-metrics">
          <div className="card">
            <h3>Ventas del Mes</h3>
            <div className="metric">24.500.000 COP</div>
          </div>
          <div className="card">
            <h3>Usuarios Activos</h3>
            <div className="metric">22</div>
          </div>
          <div className="card">
            <h3>Productos en Catálogo</h3>
            <div className="metric">342</div>
          </div>
        </div>

        <div className="table-container">
          <h3 style={{ marginBottom: '1rem' }}>Gestión de Usuarios</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>Juan Pérez</td>
                <td>Vendedor</td>
                <td style={{ color: 'var(--success)' }}>Activo</td>
                <td><button className="chip">Editar</button></td>
              </tr>
              <tr>
                <td>#002</td>
                <td>María Gómez</td>
                <td>Cliente</td>
                <td style={{ color: 'var(--success)' }}>Activo</td>
                <td><button className="chip">Editar</button></td>
              </tr>
              <tr>
                <td>#003</td>
                <td>Carlos Ruiz</td>
                <td>Cliente</td>
                <td style={{ color: 'var(--danger)' }}>Suspendido</td>
                <td><button className="chip">Editar</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="companies-section">
          <h3>Empresas y productos</h3>
          <div className="companies-grid">
            <div className="card">
            <h3>Aula</h3>
              <ul className="company-products">
                <li>Teclado Aula Hero 68</li>
                <li>Mouse Gamer UltraLight</li>
                <li>Auriculares Linsoul kiwi ears belle</li>
              </ul>
            </div>
            <div className="card">
              <h3>AOC</h3>
              <ul className="company-products">
                <li>Monitor 27 pulgadas 144Hz</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}