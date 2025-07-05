import React from 'react';
import styled from 'styled-components';

const TentangContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2d3436;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #636e72;
`;

const ContentCard = styled.div`
  background: white;
  border-radius: 25px;
  padding: 40px;
  margin: 20px 0;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #2d3436;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SectionContent = styled.div`
  line-height: 1.8;
  color: #636e72;
  font-size: 1.1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  gap: 15px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  width: 50px;
  text-align: center;
`;

const FeatureText = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  color: #2d3436;
  margin-bottom: 5px;
  font-size: 1.2rem;
`;

const FeatureDescription = styled.p`
  color: #636e72;
  margin: 0;
  font-size: 1rem;
`;

const TipsList = styled.ol`
  padding-left: 20px;
  color: #636e72;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const TipsItem = styled.li`
  margin: 15px 0;
  padding-left: 10px;
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  margin-top: 30px;
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  margin: 10px 0;
`;

const Tentang = () => {
  return (
    <TentangContainer>
      <Header>
        <Title>ℹ️ Tentang Aplikasi</Title>
        <Subtitle>Belajar Huruf Hijaiyah untuk Anak Usia Dini</Subtitle>
      </Header>

      <ContentCard>
        <SectionTitle>🎯 Tujuan Aplikasi</SectionTitle>
        <SectionContent>
          Aplikasi ini dirancang khusus untuk membantu anak-anak usia dini dalam mempelajari 
          huruf hijaiyah dengan cara yang menyenangkan dan interaktif. Melalui kombinasi 
          visual, audio, dan permainan, anak-anak dapat belajar dengan lebih efektif dan 
          tidak merasa bosan.
        </SectionContent>
      </ContentCard>

      <ContentCard>
        <SectionTitle>✨ Fitur Utama</SectionTitle>
        <FeatureList>
          <FeatureItem>
            <FeatureIcon>📚</FeatureIcon>
            <FeatureText>
              <FeatureTitle>Belajar Huruf</FeatureTitle>
              <FeatureDescription>
                Pelajari 28 huruf hijaiyah dengan tampilan yang menarik, 
                dilengkapi dengan contoh kata dan artinya.
              </FeatureDescription>
            </FeatureText>
          </FeatureItem>
          
          <FeatureItem>
            <FeatureIcon>✏️</FeatureIcon>
            <FeatureText>
              <FeatureTitle>Latihan Interaktif</FeatureTitle>
              <FeatureDescription>
                Latih kemampuan dengan permainan sederhana yang menguji 
                pemahaman anak tentang huruf hijaiyah.
              </FeatureDescription>
            </FeatureText>
          </FeatureItem>
          
          <FeatureItem>
            <FeatureIcon>🎮</FeatureIcon>
            <FeatureText>
              <FeatureTitle>Quiz Seru</FeatureTitle>
              <FeatureDescription>
                Uji pengetahuan dengan quiz yang menantang dan memiliki 
                batas waktu untuk meningkatkan konsentrasi.
              </FeatureDescription>
            </FeatureText>
          </FeatureItem>
          
          <FeatureItem>
            <FeatureIcon>🔊</FeatureIcon>
            <FeatureText>
              <FeatureTitle>Audio Pelafalan</FeatureTitle>
              <FeatureDescription>
                Dengarkan pelafalan yang benar untuk setiap huruf 
                hijaiyah untuk membantu pengucapan yang tepat.
              </FeatureDescription>
            </FeatureText>
          </FeatureItem>
          
          <FeatureItem>
            <FeatureIcon>🎨</FeatureIcon>
            <FeatureText>
              <FeatureTitle>Desain Ramah Anak</FeatureTitle>
              <FeatureDescription>
                Interface yang colorful dan menarik dengan animasi 
                yang membuat belajar menjadi menyenangkan.
              </FeatureDescription>
            </FeatureText>
          </FeatureItem>
        </FeatureList>
      </ContentCard>

      <ContentCard>
        <SectionTitle>📖 Cara Penggunaan</SectionTitle>
        <TipsList>
          <TipsItem>
            <strong>Beranda:</strong> Mulai dari halaman utama untuk melihat semua fitur yang tersedia.
          </TipsItem>
          <TipsItem>
            <strong>Belajar:</strong> Klik huruf hijaiyah untuk melihat detail lengkap termasuk contoh kata dan artinya.
          </TipsItem>
          <TipsItem>
            <strong>Latihan:</strong> Pilih jawaban yang benar berdasarkan pertanyaan yang diberikan.
          </TipsItem>
          <TipsItem>
            <strong>Quiz:</strong> Jawab pertanyaan dengan batas waktu untuk menguji kecepatan dan ketepatan.
          </TipsItem>
          <TipsItem>
            <strong>Audio:</strong> Klik tombol audio untuk mendengarkan pelafalan yang benar.
          </TipsItem>
        </TipsList>
      </ContentCard>

      <ContentCard>
        <SectionTitle>🎓 Manfaat Pembelajaran</SectionTitle>
        <SectionContent>
          <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>Mengenalkan huruf hijaiyah sejak dini</li>
            <li>Meningkatkan kemampuan membaca Al-Qur'an</li>
            <li>Mengembangkan keterampilan kognitif anak</li>
            <li>Membuat pembelajaran agama menjadi menyenangkan</li>
            <li>Mendorong minat belajar bahasa Arab</li>
          </ul>
        </SectionContent>
      </ContentCard>

      <ContactInfo>
        <ContactTitle>📞 Informasi Kontak</ContactTitle>
        <ContactText>
          Aplikasi ini dikembangkan sebagai tugas akhir untuk pembelajaran huruf hijaiyah.
        </ContactText>
        <ContactText>
          Dikembangkan dengan React.js dan styled-components untuk pengalaman yang optimal.
        </ContactText>
        <ContactText>
          Semoga aplikasi ini bermanfaat untuk pembelajaran anak-anak usia dini.
        </ContactText>
      </ContactInfo>
    </TentangContainer>
  );
};

export default Tentang; 