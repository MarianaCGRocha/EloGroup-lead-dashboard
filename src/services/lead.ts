export type Lead = {
  id?: number,
  name: string,
  phone: string,
  email: string,
  opportunities: string[],
  status?: number,
}

export type LeadList = {
  leads: Lead[],
}

export function saveLeadList( leadList: LeadList ) {
  localStorage.setItem( 'leadList', JSON.stringify( leadList ) );
}

export function getLeadList() {
  return JSON.parse( localStorage.getItem( 'leadList' ) || '[]' );
}

export function createLead( lead: Lead ) {
  const leadList = getLeadList();
  leadList.push( {...lead, id: leadList.lenght, status: 0} );
  saveLeadList( leadList );
}

export function updateLead ( lead: Lead ) {
  const leadList = getLeadList();
  const index = leadList.findIndex( l => l.id === lead.id );
  leadList[index] = lead;
  saveLeadList( leadList );
}