import {css, customElement, html, internalProperty, LitElement} from 'lit-element';
import Cliente from '../../generated/com/demo/appjugs/Cliente';
import ClienteModel from '../../generated/com/demo/appjugs/ClienteModel';
import { Binder, field } from '@vaadin/flow-frontend/form';
import {saveCliente, getClientes, deleteCliente} from '../../generated/ClienteServicio';
import "@vaadin/vaadin-text-field";
import "@vaadin/vaadin-button";

@customElement('cliente-view')
export class ClienteView extends LitElement {

  @internalProperty()
  private clientes: Cliente[] = [];

  @internalProperty()
  private message = '';

  private binder = new Binder(this, ClienteModel);

  static get styles() {
    return css`
      :host {
        display: block;
        padding:var(--lumo-space-l);
      }
    `;
  }

  render() {
    const { model } = this.binder;
    return html`<h1>Cliente</h1>
     <div class="message">${this.message}</div>
     <ul>
       ${this.clientes.map(
        (person) => html`<li>${person.nombre} ${person.apellido}
        <vaadin-button @click=${() => this.clear(person.idNumero)}>
            <iron-icon icon="lumo:minus" slot="prefix"></iron-icon>
                 Delete
        </vaadin-button
        </li>`

    )}   
     </ul>
        <h2>Nuevo Cliente</h2>
    <div class="form"><vaadin-text-field
    label="Nombre"
         ...=${field(model.nombre)}
     ></vaadin-text-field>
    <vaadin-text-field
    label="Apellidos"
       ...=${field(model.apellido)}
  ></vaadin-text-field>
    <vaadin-button @click=${this.add}>
    <iron-icon icon="lumo:plus" slot="prefix"></iron-icon>Add
        </vaadin-button>
        </div>`;
  }

  async add() {
    const saved = await this.binder.submitTo(saveCliente);
    if (saved) {
      this.clientes = [...this.clientes, saved];
      this.binder.clear();
    }
  }

  async firstUpdated() {
    this.clientes = await getClientes();
  }

  async clear(idNumero: any) {
    await deleteCliente(idNumero);
    this.clientes = this.clientes.filter((t) => t.idNumero !== idNumero);
  }
}
