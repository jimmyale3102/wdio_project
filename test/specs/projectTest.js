describe('Client side delay', ()=>{
    it('Locate and press main button', async()=>{
        await browser.url('http://uitestingplayground.com/clientdelay')
        
        const triggeringButton = $('#ajaxButton')
        const labelToAppear = $('.bg-success')

        await expect(triggeringButton).toHaveText('Button Triggering Client Side Logic')
        await triggeringButton.click()
        /**
         * 15021 fails
         * 15022 Success
         */
        await labelToAppear.waitForDisplayed({timeout: 15022})
    })
})