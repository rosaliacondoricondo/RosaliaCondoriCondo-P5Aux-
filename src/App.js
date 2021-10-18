import logo from './logo.svg';
import './App.css';
import { getInitialState} from 'react';
import { EvaluaColores} from 'react';
import { BorrarPantalla} from 'react';
import { EvaluarBotones} from 'react';
import { render} from 'react';
import { React} from 'react';
import { Botones} from 'react';
import { ComponenteCalculadora} from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <body>
<div align="center">
<a href="http://develoteca.com">
<img src="http://develoteca.com/wp-content/themes/site/img/develoteca.png" />
</a>
        <ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-4331617637495482"
     data-ad-slot="2764029251"></ins></div>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
			
          		<div class="col-md-3"></div>
						
				<div id="Calculadora" class="col-md-6">
					   <div class="panel panel-primary" style="margin-top: 10%;">
						<div class="panel-heading">Calculadora</div>
						<div class="panel-body">
					  		<div class="col-md-12" style="margin-bottom: 10px;">
					  			<div id="idCalculadora"></div>
					   		</div>
					  	</div>
					   </div>
				</div>
		    
    const Botones = ["7","8","9","+","4","5","6","-","3","2","1","*","0",".","=","/"];
    const ComponenteCalculadora = React.createClass({
  		getInitialState= function() {
    			return {
    				data: this.props.data,
    				txtSalida:0
    				};
  			},
  		EvaluaColores= function(it){
  				const nombreClase='primary';
  			const  signos = ["+", "-", "*", "/"];
  				if(signos.indexOf(it)>-1){nombreClase='success';}
  				if(it=='='){nombreClase='warning';}
  				return nombreClase;
			},
			BorrarPantalla= function(){
					  this.setState({txtSalida:0});
			},
			EvaluarBotones = function(itemPresionado){

        const signos = ["+", "-", "*", "/"];
        
          if(itemPresionado=='='){
            this.setState({txtSalida:eval(this.state.txtSalida)});

          }else{
            if((this.state.txtSalida==0)){
              if(signos.indexOf(itemPresionado)>-1){this.setState({txtSalida:0});}
              else{this.setState({txtSalida:itemPresionado});}
            }else{
              this.setState({txtSalida:this.state.txtSalida+itemPresionado});
            } 
          }
				
			},
			
			render =  function() {
  			
        const  self = this;
				const  mBottom = { marginBottom: '10px'};
			  const  ClaseBotones='btn-lg btn-block  btn btn-';

       const  ListaBotones = this.state.data.map(function(item) {
      				return <div className="col-md-3" style={mBottom} >
      				<input type="button"  onClick={self.EvaluarBotones.bind(self,item)} className={ClaseBotones+(self.EvaluaColores(item))} value={item}/>
      				</div>;
    			});

    			return React.DOM.div({
                className:'form-group', 
                children:[React.DOM.input({ 
                            type:"text",
                            className:"form-control",
                            name:"txtResultado",
                            ref:"txtResultado",
                            value:this.state.txtSalida,
                            style:{height:'67px',fontSize:'44px',textAlign:'right',marginBottom:"20px",boxShadow:"inset 3px 3px rgba(0, 0, 0, 0.2)"},
                            placeholder:"Disabled"
                          }),
                      (<div className="row">{ListaBotones}</div>)
                      ,(<input onClick={this.BorrarPantalla} type="button" className="btn btn-danger btn-lg btn-block" value='Borrar'/>)
                   ] 
        });
  			}
		});

		const React.renderComponent(<ComponenteCalculadora data={Botones} />, document.getElementById('idCalculadora'));

	
  </body>
      </header>
    </div>
  );
}

export default App;
