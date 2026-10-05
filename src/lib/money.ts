export function formatMoney(amount: number | string): string {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(num)
}

export function toPaise(amount: number): number {
  return Math.round(amount * 100)
}

export function fromPaise(paise: number): number {
  return Number((paise / 100).toFixed(2))
}

export function calculateLineTotals(quantity: number, unitPrice: number, taxRate: number) {
  const lineTaxableStr = (quantity * unitPrice).toFixed(2)
  const lineTaxable = parseFloat(lineTaxableStr)
  
  const lineTaxStr = (lineTaxable * (taxRate / 100)).toFixed(2)
  const lineTax = parseFloat(lineTaxStr)
  
  const lineTotal = fromPaise(toPaise(lineTaxable) + toPaise(lineTax))
  
  return { lineTaxable, lineTax, lineTotal }
}
