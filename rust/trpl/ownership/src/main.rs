fn main() {


    let s1 = String::from("hello world");
    let s2 = first_word(&s1);

    println!("s1:{}, s2:{}", s1, s2);

    let v1 = [1, 2, 3, 4, 5];
    let slice = &v1[1..3];
    println!("slice: {}", slice.len());



}

fn first_word(s: &String) -> &str{
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate(){
        if item == b' '{
            return &s[0..i];

        }
    }

    &s[..]

}