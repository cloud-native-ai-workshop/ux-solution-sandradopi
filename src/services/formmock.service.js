export class StockItemMockService {
    async listStockItems() {
        return new Promise(resolve => {
            // Wait 1 second before returning data
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        appliance: 'Washing machine',
                        date: '10-10-2022',
                        timestart: '10:00',
                        timeend: '18:00'
                    },
                    {
                        id: 1,
                        appliance: 'Fridge',
                        date: '10-10-2022',
                        timestart: '21:00',
                        timeend: '23:59'
                    },
                ]);
            }, 1000)
        });
    }
}
