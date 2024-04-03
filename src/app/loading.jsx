import Image from 'next/image'

export default function loading() {
    return (
        <div className='flex justify-center'>
            <Image className='h-60' src="loader.svg" height={500} width={500} alt='Loading...' />
        </div>
    )
}
