export default function(a){a=(a=a.replace(/^\s+|\s+$/g,"")).toLowerCase();for(var e="àáäâèéëêìíïîòóöôùúüûñç·/_,:;",r=0,c=e.length;r<c;r++)a=a.replace(new RegExp(e.charAt(r),"g"),"aaaaeeeeiiiioooouuuunc------".charAt(r));if(""==(a=a.replace(/[^a-z0-9 -]/g,"").replace(/\s/g,"").replace(/-/g,""))){let e=Math.random()+"";a=e.replace("0.","")}return a}