// ADD CSS COM JS / JQUERY
	
	// adicionando : 
	$('#collapse-navbar').on('show.bs.collapse', function(){
		$('.topCasaFina-banner').css('transform', 'translate(-50%, 10%)');
	});

	// removendo : 
	$('#collapse-navbar').on('hide.bs.collapse', function(){
		$('.topCasaFina-banner').css('transform', 'translate(-50%, -50%)');
	});;

// ADD CSS COM JS / JQUERY


// ATUALIZAR ANO AUTOMATICAMENTE / JAVASCRIPT

    // função para atualizar ano automaticamente (1-HORA DE TRABALHO)
    function autoYear(){
        var year = new Date().getFullYear();
        var getId = document.getElementById('dateAuto');
        var textById = getId.innerHTML;
        var troca = textById.replace(textById, year);
        getId.innerHTML = troca;
    }

// ATUALIZAR ANO AUTOMATICAMENTE / JAVASCRIPT

// HOVER + ADD CLASS / JQUERY


     $(".botaoHenrique").hover(function(){
        let valor = $(this).attr("data-valor");
        $(".henriquao").html("<p>"+valor+"</p>")
        return false;
    });

    // HOVER + ADD CLASS / JQUERY


// function trocaCores(){
// 	let posicaoScrool = $(window).scrollTop();
// 	let header = $("#header").height();
// 	if(posicaoScrool > header){
// 	    $("section").addClass("henrique")
// 	}else{
// 	    $("section").removeClass("henrique")
// 	}
// 	console.log(header);
//   }

// function ajustaBlocos(){
// 	let largura = $(window).width();
// 	let headerHeight = $("section").height();
// 	if(largura < 600){
// 	    $("section").addClass("henriqueAltura")
// 	    $("section").addClass("henriqueAltura")
// 	}else{
// 	    $("section").removeClass("henriqueAltura")
// 	}
//   }

//   $(".botaoHenrique").click(function(){
// 	let valor = $(this).attr("data-valor");
// 	$(".henriquao").html("<p>"+valor+"</p>")
// 	return false;
//   });

    // $(".lista a").each(function(i){
    //     $(".lista a").eq(i).click(function(){
    //         alert(i)
    //     });
    // });

    //scrollheader

    function scrolltop() {

        var scroller = $(document).scrollTop();
        
        if (scroller > 50) {
        
        $("header").addClass("scroller");
        
        } else {
        
        $("header").removeClass("scroller");
        
        }
        
        }
        
        //NO SCROLL JQUERY
        
        $(window).scroll(function () {
        
        scrolltop();
        
        if (jQuery(this).scrollTop() > 0) {
        
        $("header").addClass("light");
        
        } else {
        
        $("header").removeClass("light");
        
        }
        
        });