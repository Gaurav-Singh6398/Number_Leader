let userInput= prompt("Peroid of running Buisness im months")
var value = parseInt(userInput);

if (value >= 12) {
    document.write(`
    
    <form>
    <div class="forma">
    <label>Sales/Turnover for Last 12 months</label><br>
    <input type="number"  name="sales" id="sales" required><br>
    <label>EBITDA</label> <br>
    <input type="number"  name="ebita" id="ebita" ><br>
    <label>EBIT</label><br>
    <input type="number"  name="ebit" id="ebit" ><br>
    <label>PAT</label><br>
    <input type="number" placeholder="" name="sname" id="sname" required><br>
    <label>Total Number of Equity Shares Issued</label> <br>
    <input type="number" name="shares" id="shares" ><br>
    <label>Curent Book Value</label><br>
    <input type="number" name="bookvalue" id="bookvalue" ><br>
    <button>Submit</button> 
    </div>
</form>
    `);
} else {
    document.write(`
    <form>
    <div class="forma">
<label>Forcasted Sales/Turnover for next 12 months</label><br>
    <input type="number"  name="asales" id="asales" required><br>
    <label>Forcatsed EBITDA for next 12 months</label> <br>
    <input type="number"  name="aebita" id="aebita" ><br>
    <label>Forcatsed EBIT for next 12 months</label><br>
    <input type="number"  name="aebit" id="aebit" ><br>
    <label>Forcatsed PAT for next 12 months</label><br>
    <input type="number" name="asname" id="asname" required><br>
    <label>Total Current Sales </label> <br>
    <input type="number" name="ashares" id="ashares" ><br>
    <label>Total Current PAT</label><br>
    <input type="number" name="apat" id="apat" ><br>
    <button>Submit</button>
    </div>
</form>
    `);
}