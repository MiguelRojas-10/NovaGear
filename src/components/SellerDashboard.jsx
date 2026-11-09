import Navbar from './Navbar';

export default function SellerDashboard({ user, onLogout }) {
  return (
    <>
      <Navbar user={user} onLogout={onLogout} />
      <div className="dashboard-container">
        <h2 style={{ marginBottom: '1.5rem' }}>Gestión de Inventario y Pedidos — Aula</h2>
        
        <div className="grid-metrics" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="card">
            <h3 style={{ marginBottom: '1rem', color: 'white' }}>Añadir Nuevo Producto de Aula</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-grid">
                <div className="input-group">
                  <label>Nombre del Producto</label>
                  <input type="text" placeholder="Ej: Teclado Mecánico RGB" />
                </div>
                <div className="input-group">
                  <label>Categoría</label>
                  <input type="text" placeholder="Teclados, Mouses..." />
                </div>
                <div className="input-group">
                  <label>Precio (COP)</label>
                  <input type="number" placeholder="0" />
                </div>
                <div className="input-group">
                  <label>Stock Inicial</label>
                  <input type="number" placeholder="Cantidad" />
                </div>
              </div>
              <button className="btn-primary" style={{ marginTop: '0' }}>Guardar Producto</button>
            </form>
          </div>

          <div className="table-container">
            <h3 style={{ marginBottom: '1rem' }}>Productos de Aula</h3>
            <table>
              <thead>
                <tr>
                  <th>Artículo</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Teclado Aula Hero 68</td>
                  <td>200.000 COP</td>
                </tr>
                <tr>
                  <td>Mouse Gamer UltraLight</td>
                  <td>99.990 COP</td>
                </tr>
                <tr>
                  <td>Auriculares Linsoul kiwi ears belle</td>
                  <td>159.990 COP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="table-container">
          <h3 style={{ marginBottom: '1rem' }}>Últimos Pedidos de Aula</h3>
          <table>
            <thead>
              <tr>
                <th>Pedido</th>
                <th>Cliente</th>
                <th>Artículo</th>
                <th>Total</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#ORD-991</td>
                <td>María Gómez</td>
                <td>Teclado Aula Hero 68</td>
                <td>200.000 COP</td>
                <td>Pendiente</td>
              </tr>
              <tr>
                <td>#ORD-990</td>
                <td>Luis Torres</td>
                <td>Mouse Gamer UltraLight</td>
                <td>99.990 COP</td>
                <td>Enviado</td>
              </tr>
              <tr>
                <td>#ORD-989</td>
                <td>Ana Silva</td>
                <td>Auriculares Linsoul kiwi ears belle</td>
                <td>159.990 COP</td>
                <td>Entregado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}