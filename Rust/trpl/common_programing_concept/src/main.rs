

fn celsius_to_fahrenheit(num: i32) -> i32 {
    (num as f32 * (9.0 / 5.0) + 32.0) as i32
}

fn fibo(num: u32){

    let mut f0 = 0;
    let mut f1 = 1;

    for _ in 0..num{

        print!("{} ", f1);

        let f2 = f0 + f1;
        f0 = f1;
        f1 = f2;
    }
}


fn main() {
    let celsius :i32 = 30;
    println!("{} celsius is {} fahreneheit" ,celsius, celsius_to_fahrenheit(celsius));

    fibo(5);
}
