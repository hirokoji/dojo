extern crate fizzbuzz;

fn main(){
    for value in 1..101{
        match fizzbuzz::fizzbuzz(value) {
            Some(ans) => println!("{}", ans),
            None => (println!("{}", value)),
        }
    }
}